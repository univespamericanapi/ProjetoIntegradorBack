import CompetidorRepository from "../repositories/competidor.repository.js";
import ApresentacaoRepository from "../repositories/apresentacao.repository.js";
import CosplayDesfileRepository from "../repositories/cosp_desf.repository.js";
import ParticipacaoRepository from "../repositories/participacao.repository.js";
import EventoRepository from "../repositories/evento.repository.js";
import ConcursoRepository from "../repositories/concurso.repository.js";
import db from "../models/db.model.js";
import verifica from "../helpers/verificacao.helper.js";
import dataUtils from "../utils/data.util.js";
import emailService from "./email.service.js";
import transacaoService from "./transacao.service.js";

const criar = async (novoComp, novoApres, novoPart, novoCospDesf) => {
    try {
        const Evento = new EventoRepository(db.evento);
        const Concurso = new ConcursoRepository(db.concurso);
        const Competidor = new CompetidorRepository(db.competidor);
        const Apresentacao = new ApresentacaoRepository(db.apresentacao);
        const Participacao = new ParticipacaoRepository(db.participacao);
        const CospDesfile = new CosplayDesfileRepository(db.cospDesf);

        const evento = await Evento.buscarPorId(novoPart.part_event);

        verifica.registroExiste(evento, Evento.nome);

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

        competidor = await Competidor.buscarPorEmail(novoComp.comp_email);
        verifica.emailDuplicado(competidor);

        novoComp.comp_nasc = dataUtils.stringParaData(novoComp.comp_nasc);

        if (!novoComp.comp_nome_social) {
            novoComp.comp_nome_social = novoComp.comp_nome
        }

        verifica.vagasEspera(concurso);

        novoPart.part_tipo_inscr = verifica.vagasInscri(concurso);

        const instanciasTransacao = {
            Competidor,
            Apresentacao,
            Participacao,
            Extra: CospDesfile,
        };

        const dadosTransacao = {
            competidor: Competidor.selecionaDadosCriar(novoComp),
            apresentacao: Apresentacao.selecionaDadosCriar(novoApres),
            participacao: Participacao.selecionaDadosCriar(novoPart),
            extra: CospDesfile.selecionaDadosCriar(novoCospDesf),
            concurso,
        };

        const resposta = transacaoService(
            instanciasTransacao,
            dadosTransacao
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