import CompetidorRepository from '../repositories/competidor.repository.js';
import ApresentacaoRepository from '../repositories/apresentacao.repository.js';
import ParticipacaoRepository from '../repositories/participacao.repository.js';
import EventoRepository from '../repositories/evento.repository.js';
import ConcursoRepository from '../repositories/concurso.repository.js';
import db from '../models/db.model.js';
import verifica from '../utils/verificacao.util.js';
import dataUtils from '../utils/data.util.js';
import transacaoService from './transacao.service.js';
import localidadesConsumer from '../consumer/localidades.consumer.js';
import selecionaExtra from '../utils/selecionaExtra.util.js';
import { concursosConstant } from '../constants/listas.constant.js';

const criar = async (novoComp, novoApres, novoPart, novoExtra = false) => {
    try {
        const Evento = new EventoRepository(db.evento);
        const Concurso = new ConcursoRepository(db.concurso);
        const Competidor = new CompetidorRepository(db.competidor);
        const Apresentacao = new ApresentacaoRepository(db.apresentacao);
        const Participacao = new ParticipacaoRepository(db.participacao);

        const evento = await Evento.buscarPorId(novoPart.part_event);

        verifica.registroExiste(evento, Evento.nome);
        verifica.aceitouTermos(novoPart.part_aceit_regul);

        const concurso = await Concurso.buscarPorId(novoPart.part_conc);

        verifica.registroExiste(concurso, Concurso.nome);
        verifica.concursoInativo(concurso);

        const Extra = concurso.conc_nome === concursosConstant[2] ? false : await selecionaExtra(concurso.conc_nome, novoExtra);

        verifica.cpfValido(novoComp.comp_cpf);
        verifica.emailValida(novoComp.comp_email);

        let competidor = await Competidor.buscarPorEmail(novoComp.comp_email);
        verifica.emailDuplicado(competidor);

        competidor = await Competidor.buscarPorCpf(novoComp.comp_cpf);
        let apresentacao;
        let participacao;
        if (competidor) {
            apresentacao = await Apresentacao.buscarPorCompetidor(competidor.comp_id);
            if (apresentacao) {
                participacao = await Participacao.buscarPorApresentacao(
                    apresentacao.apres_id,
                    evento.event_id
                );
            }
        }

        verifica.registroDuplicado(participacao, Participacao.nome);

        const cidade = await localidadesConsumer.cidadePorId(novoComp.comp_cidade);
        verifica.registroExiste(cidade.cid_id, "Cidade");

        novoComp.comp_nasc = dataUtils.stringParaData(novoComp.comp_nasc);

        if (!novoComp.comp_nome_social) {
            novoComp.comp_nome_social = novoComp.comp_nome;
        }

        verifica.vagasEspera(concurso);

        novoPart.part_tipo_inscr = verifica.vagasInscri(concurso);

        const instanciasTransacao = {
            Competidor,
            Apresentacao,
            Participacao,
            Extra,
        };

        const dadosTransacao = {
            competidor: Competidor.selecionaDadosCriar(novoComp),
            apresentacao: Apresentacao.selecionaDadosCriar(novoApres),
            participacao: Participacao.selecionaDadosCriar(novoPart),
            extra: !Extra ? Extra : Extra.selecionaDadosCriar(novoExtra),
            concurso,
        };

        const resposta = await transacaoService(
            instanciasTransacao,
            dadosTransacao
        );

        return {
            status: 201,
            message: resposta,
        };
    } catch (erro) {
        console.error(erro);
        throw erro;
    }
};

const cadastroParticipanteService = {
    criar,
};

export default cadastroParticipanteService;
