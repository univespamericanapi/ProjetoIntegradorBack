import ParticipacaoRepository from "../repositories/participacao.repository.js";
import CompetidorRepository from '../repositories/competidor.repository.js';
import ApresentacaoRepository from '../repositories/apresentacao.repository.js';
import ConcursoRepository from '../repositories/concurso.repository.js';
import db from "../models/db.model.js";
import verifica from "../utils/verificacao.util.js";

const registrarCheckin = async (partId) => {
    try {
        const Participacao = new ParticipacaoRepository(db.participacao);
        const participacao = await Participacao.buscarPorId(partId);
        const checkin = { 'part_checkin': true };

        verifica.registroExiste(participacao, Participacao.nome);

        const resposta = await Participacao.atualizarPorId(partId, checkin);

        return {
            status: 202,
            message: resposta,
        };
    } catch (erro) {
        console.error(erro);
        throw erro;
    }
};

const listarInscricoes = async (concId, espera) => {
    try {
        const listaInscricoes = [];
        const tipoInscr = espera ? 'Espera' : 'Inscrição';
        const Concurso = new ConcursoRepository(db.concurso);
        const concurso = await Concurso.buscarPorId(concId);

        verifica.registroExiste(concurso, Concurso.nome);

        const Participacao = new ParticipacaoRepository(db.participacao);
        const listaPart = await Participacao.buscaPorConcurso(concId);

        const Apresentacao = new ApresentacaoRepository(db.apresentacao);
        const Competidor = new CompetidorRepository(db.competidor);

        for (const participacao of listaPart) {
            const apresentacao = await Apresentacao.buscarPorId(participacao.part_apres);
            const competidor = await Competidor.buscarPorId(apresentacao.apres_comp);

            const inscricao = {
                comp_nome_social: competidor.comp_nome_social,
                comp_nome: competidor.comp_nome,
                comp_cpf: competidor.comp_cpf,
                comp_whats: competidor.comp_whats,
                comp_email_verif: Boolean(competidor.comp_email_verif),
                apres_nome: apresentacao.apres_nome,
                part_checkin: participacao.part_checkin,
                part_tipo_inscr: participacao.part_tipo_inscr,
            };

            if (inscricao.comp_email_verif && inscricao.part_tipo_inscr === tipoInscr) {
                listaInscricoes.push(inscricao);
            }
        }

        return {
            status: 200,
            message: listaInscricoes,
        };
    } catch (erro) {
        console.error(erro);
        throw erro;
    }
};

const checkinService = {
    registrarCheckin,
    listarInscricoes,
};

export default checkinService;