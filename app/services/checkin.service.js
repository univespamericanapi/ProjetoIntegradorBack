import ParticipacaoRepository from "../repositories/participacao.repository.js";
import CompetidorRepository from '../repositories/competidor.repository.js';
import ApresentacaoRepository from '../repositories/apresentacao.repository.js';
import ConcursoRepository from '../repositories/concurso.repository.js';
import TransacaoRepository from "../repositories/transacao.repository.js";
import db from "../models/db.model.js";
import verifica from "../utils/verificacao.util.js";
import consoleError from "../utils/consoleError.util.js";

const registrarCheckin = async (partId) => {
    try {
        const resposta = {
            status: 0,
            message: "",
        };
        const Participacao = new ParticipacaoRepository(db.participacao);
        const Concurso = new ConcursoRepository(db.concurso);

        const participacao = await Participacao.buscarPorId(partId);
        verifica.registroExiste(participacao, Participacao.nome);

        const concurso = await Concurso.buscarPorId(participacao.part_conc);
        verifica.registroExiste(concurso, Concurso.nome);

        if (concurso.conc_atual_checkin < concurso.conc_limit_checkin || participacao.part_checkin) {
            const checkin = { 'part_checkin': !participacao.part_checkin };

            const Transacao = new TransacaoRepository(db.sequelize);
            const transacao = await Transacao.iniciar();

            await Transacao.incrementar(
                concurso,
                { conc_atual_checkin: checkin.part_checkin === true ? 1 : -1 },
                transacao
            );

            await Transacao.atualizar(
                Participacao.model,
                { part_id: partId },
                checkin,
                transacao
            );

            resposta.status = 202;
            resposta.message = 'Checkin realizado com sucesso!';

            await Transacao.finalizar(transacao);
        } else {
            resposta.status = 400;
            resposta.message = 'Limite de checkin alcançado!';
        }

        return resposta;
    } catch (erro) {
        consoleError(erro);
        throw erro;
    }
};

const listarInscricoes = async (concId, espera) => {
    try {
        const listaInscricoes = [];
        const tipoInscr = (espera === true) ? 'Espera' : 'Inscrição';
        const Concurso = new ConcursoRepository(db.concurso);
        const concurso = await Concurso.buscarPorId(concId);

        verifica.registroExiste(concurso, Concurso.nome);

        const Participacao = new ParticipacaoRepository(db.participacao);
        const listaPart = await Participacao.buscaPorConcurso(concId);

        console.log(tipoInscr, espera);

        const Apresentacao = new ApresentacaoRepository(db.apresentacao);
        const Competidor = new CompetidorRepository(db.competidor);

        for (const participacao of listaPart) {
            const apresentacao = await Apresentacao.buscarPorId(participacao.part_apres);
            const competidor = await Competidor.buscarPorId(apresentacao.apres_comp);

            const inscricao = {
                comp_id: competidor.comp_id,
                comp_nome_social: competidor.comp_nome_social,
                comp_nome: competidor.comp_nome,
                comp_cpf: competidor.comp_cpf,
                comp_whats: competidor.comp_whats,
                comp_email_verif: competidor.comp_email_verif,
                apres_id: apresentacao.apres_id,
                apres_nome: apresentacao.apres_nome,
                part_id: participacao.part_id,
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
        consoleError(erro);
        throw erro;
    }
};

const checkinService = {
    registrarCheckin,
    listarInscricoes,
};

export default checkinService;