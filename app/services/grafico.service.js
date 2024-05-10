import localidadesConsumer from "../consumer/localidades.consumer.js";
import db from "../models/db.model.js";
import CompetidorRepository from "../repositories/competidor.repository.js";
import ParticipacaoRepository from "../repositories/participacao.repository.js";
import calcularIdade from "../utils/calcularIdade.js";
import consoleError from "../utils/consoleError.util.js";
import gerarFaixasEtarias from "../utils/gerarFaixasEtarias.js";
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

const faixasEtarias = async (eventoId = 1) => {
    try {
        const Competidor = new CompetidorRepository(db.competidor);
        const competidoresLista = await Competidor.buscarPorEvento(Number(eventoId), db);
        const competidoresIdades = [];
        competidoresLista.forEach(competidor => {
            const idade = calcularIdade(competidor.comp_nasc);
            competidoresIdades.push(idade);
        });
        const faixas = gerarFaixasEtarias(competidoresIdades, 7);
        const data = [];
        const labels = [];
        faixas.forEach(element => {
            labels.push(element.faixaEtaria);
            data.push(element.idades.length);
        });

        const datasets = [{
            data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
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
}

const graficoService = {
    competidorPorCidade,
    competidorPorConcurso,
    faixasEtarias,
};

export default graficoService;