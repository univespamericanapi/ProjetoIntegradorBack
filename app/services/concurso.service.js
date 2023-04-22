import verifica from "../helpers/verificacao.helpper.js";
import db from "../models/db.model.js";
import ConcursoRepository from "../repositories/concurso.repository.js";
import dataUtils from "../utils/data.util.js";

const buscarPorEvento = async (idEvento) => {
    try {
        const Concurso = new ConcursoRepository(db.concurso);

        const concursos = await Concurso.buscarPorEvento(idEvento);

        verifica.registroExiste(concursos);

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

        verifica.faltaParametro(idConcurso);

        const concurso = await Concurso.buscarPorId(idConcurso);

        verifica.registroExiste(concurso);

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