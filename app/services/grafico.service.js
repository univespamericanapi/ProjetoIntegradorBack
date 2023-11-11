import localidadesConsumer from "../consumer/localidades.consumer.js";
import db from "../models/db.model.js";
import CompetidorRepository from "../repositories/competidor.repository.js";
import ParticipacaoRepository from "../repositories/participacao.repository.js";
import consoleError from "../utils/consoleError.util.js";
import verifica from "../utils/verificacao.util.js";

const competidorPorCidade = async (eventoId = 1) => {
    try {
        const Competidor = new CompetidorRepository(db.competidor);
        const cidadeLista = await Competidor.buscarEventoAgruparCidade(Number(eventoId), db);
        verifica.registroExiste(cidadeLista, 'Registro');

        const labels = [];
        const data = [];
        for (const cidade of cidadeLista) {
            const cidadeDados = await localidadesConsumer.cidadePorId(cidade.comp_cidade);
            labels.push(cidadeDados['cid_desc']);
            data.push(cidade['num_comp']);
        }

        const datasets = [{
            data,
        }];

        const resposta = {
            datasets,
            labels,
        };

        return {
            status: 200,
            message: resposta,
        };
    } catch (erro) {
        consoleError(erro);
        throw erro;
    }
};

const competidorPorConcurso = async (eventoId = 1) => {
    try {
        const Participacao = new ParticipacaoRepository(db.participacao);
        const concursoLista = await Participacao.buscarEventoAgruparConcurso(Number(eventoId), db);
        verifica.registroExiste(concursoLista, 'Registro');


        const labels = [];
        const data = [];

        for (const concurso of concursoLista) {
            labels.push(concurso['concurso.conc_nome']);
            data.push(concurso['num_comp']);
        }


        const datasets = [{
            data,
        }];

        const resposta = {
            datasets,
            labels,
        };

        return {
            status: 200,
            message: resposta,
        };
    } catch (erro) {
        consoleError(erro);
        throw erro;
    }
};

const graficoService = {
    competidorPorCidade,
    competidorPorConcurso,
};

export default graficoService;

export const testeGraficoService = async () => {
    const cidade = await competidorPorCidade(1);
    const concurso = await competidorPorConcurso('1');

    console.log(cidade);
    console.log(concurso);
};