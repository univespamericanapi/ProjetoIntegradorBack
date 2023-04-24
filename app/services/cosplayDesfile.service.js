import CompetidorRepository from "../repositories/competidor.repository.js";
import ApresentacaoRepository from "../repositories/apresentacao.repository.js";
import CosplayDesfileRepository from "../repositories/cosp_desf.repository.js";
import ParticipacaoRepository from "../repositories/participacao.repository.js";
import EventoRepository from "../repositories/evento.repository.js";
import ConcursoRepository from "../repositories/concurso.repository.js";
import TransacaoRepository from "../repositories/transacao.repository.js";
import db from "../models/db.model.js";
import verifica from "../helpers/verificacao.helpper.js";
import dataUtils from "../utils/data.util.js";
import emailService from "./email.service.js";
import config from "../config/config.js";
import EmailTokenRepository from "../repositories/emailToken.repository.js";

const criar = async (novoComp, novoApres, novoPart, novoCospDesf) => {
    try {
        const Evento = new EventoRepository(db.evento);
        const Concurso = new ConcursoRepository(db.concurso);
        const Competidor = new CompetidorRepository(db.competidor);
        const Apresentacao = new ApresentacaoRepository(db.apresentacao);
        const Participacao = new ParticipacaoRepository(db.participacao);
        const CospDesfile = new CosplayDesfileRepository(db.cospDesf);
        const Transacao = new TransacaoRepository(db.sequelize);
        const EmailToken = new EmailTokenRepository(db.emailToken);

        const evento = await Evento.buscarPorId(novoPart.part_event);

        verifica.registroExiste(evento, "Evento");

        const concurso = await Concurso.buscarPorId(novoPart.part_conc);
        let competidor = await Competidor.buscarPorCpf(novoComp.comp_cpf);
        let apresentacao;
        let participacao;
        if (competidor) {
            apresentacao = await Apresentacao.buscarPorCompetidor(competidor.comp_id);
            if (apresentacao) {
                participacao = await Participacao.buscarPorApresentacao(apresentacao.apres_id, evento.event_id);
            }
        }

        verifica.aceitouTermos(novoPart.part_aceit_regul);

        verifica.registroExiste(concurso, Concurso.nome);

        verifica.concursoInativo(concurso);

        verifica.registroDuplicado(participacao, Participacao.nome);

        verifica.cpfValido(novoComp.comp_cpf);
        verifica.emailValida(novoComp.comp_email);

        novoComp.comp_nasc = dataUtils.stringParaData(novoComp.comp_nasc);

        if (!novoComp.comp_nome_social) {
            novoComp.comp_nome_social = novoComp.comp_nome
        }

        verifica.vagasEspera(concurso);

        novoPart.part_tipo_inscr = verifica.vagasInscri(concurso)

        competidor = Competidor.selecionaDadosCriar(novoComp);
        apresentacao = Apresentacao.selecionaDadosCriar(novoApres);
        participacao = Participacao.selecionaDadosCriar(novoPart);
        const cospDesfile = CospDesfile.selecionaDadosCriar(novoCospDesf);

        const transacao = await Transacao.iniciar();
        const compCriado = await Transacao.buscarOuCriar(
            Competidor.model,
            { comp_cpf: competidor.comp_cpf },
            competidor,
            transacao
        );
        apresentacao.apres_comp = compCriado.comp_id;
        const apresCriado = await Transacao.criar(
            Apresentacao.model,
            apresentacao,
            transacao
        );
        participacao.part_apres = apresCriado.apres_id;
        const partCriada = await Transacao.criar(
            Participacao.model,
            participacao,
            transacao
        );
        cospDesfile.extra_part = partCriada.part_id;
        await Transacao.criar(
            CospDesfile.model,
            cospDesfile,
            transacao
        );
        if (participacao.part_tipo_inscr === "Inscrição") {
            await Transacao.incrementar(
                concurso,
                { conc_atual_inscr: 1 },
                transacao
            );
        } else {
            await Transacao.incrementar(
                concurso,
                { conc_atual_espera: 1 },
                transacao
            );
        }
        const emailToken = await emailService.criarToken(
            compCriado,
            participacao.part_tipo_inscr
        );
        await Transacao.criar(
            EmailToken.model,
            emailToken,
            transacao
        );
        await Transacao.finalizar(transacao);

        const mensagem = `Verifique seu e-mail clicando no link abaixo: </br>
            ${config.baseUrlEmail}/cadastro/verificar/${compCriado.comp_id}/${emailToken.token}`;
        const resposta = await emailService.enviarEmail(
            compCriado.comp_email,
            "E-mail de verificação.",
            mensagem
        );

        return {
            status: 201,
            message: resposta,
        };
    } catch (erro) {
        throw erro;
    }
};

const cosplayDesfileService = {
    criar,
};

export default cosplayDesfileService;