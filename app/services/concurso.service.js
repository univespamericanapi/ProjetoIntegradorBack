import verifica from "../helpers/verificacao.helper.js";
import db from "../models/db.model.js";
import ConcursoRepository from "../repositories/concurso.repository.js";
import dataUtils from "../utils/data.util.js";

const buscarPorEvento = async (idEvento) => {
    try {
        const Concurso = new ConcursoRepository(db.concurso);

        const concursos = await Concurso.buscarPorEvento(idEvento);

        verifica.registroVazio(concursos, Concurso.nome);

        return {
            status: 200,
            message: concursos,
        };
    } catch (erro) {
        throw erro;
    }
};

const atualizar = async (idConcurso, alteracao) => {
    try {
        const Concurso = new ConcursoRepository(db.concurso);

        const concurso = await Concurso.buscarPorId(idConcurso);

        verifica.registroExiste(concurso, Concurso.nome);

        if(alteracao.conc_data_ativ) {
            alteracao.conc_data_ativ = dataUtils.stringParaData(alteracao.conc_data_ativ);
        }

        const resposta = await Concurso.atualizarPorId(idConcurso, alteracao);

        return {
            status: 202,
            message: resposta,
        };
    } catch (erro) {
        throw erro;
    }
};

const concursoService = {
    buscarPorEvento,
    atualizar,
};

export default concursoService;