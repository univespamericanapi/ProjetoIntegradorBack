import localidadesConsumer from "../consumer/localidades.consumer.js";
import db from "../models/db.model.js";
import ApresentacaoRepository from "../repositories/apresentacao.repository.js";
import CompetidorRepository from "../repositories/competidor.repository.js";
import ConcursoRepository from "../repositories/concurso.repository.js";
import ParticipacaoRepository from "../repositories/participacao.repository.js";
import calcularIdade from "../utils/calcularIdade.js";
import consoleError from "../utils/consoleError.util.js";
import contarNumApres from "../utils/contarNumApres.js";
import dataUtils from "../utils/data.util.js";
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

const vagasConcursos = async (eventoId = 1) => {
    try {
        const Concurso = new ConcursoRepository(db.concurso);
        const concursoLista = await Concurso.buscarPorEvento(eventoId);
        verifica.registroExiste(concursoLista, 'Registro');

        const data = [];

        concursoLista.map(concurso => {
            data.push({
                'nome': concurso.conc_nome,
                'atual': concurso.conc_atual_inscr,
                'restantes': (concurso.conc_limit_inscr - concurso.conc_atual_inscr),
            });
        });

        return {
            status: 200,
            message: data,
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

const frequenciaPorEvento = async (eventoId = 1) => {
    try {
        const Participacao = new ParticipacaoRepository(db.participacao);
        const Apresentacao = new ApresentacaoRepository(db.apresentacao);

        const contagemDoEvento = await Participacao.contarPorEvento(eventoId);
        verifica.registroExiste(contagemDoEvento, 'Registro');

        const contagensDeCompEmEventos = await Apresentacao.contarApresPorComp(db);
        verifica.registroExiste(contagensDeCompEmEventos, 'Registro');

        const frequencia = contarNumApres(contagensDeCompEmEventos);

        const labels = [];
        const data = [];

        frequencia.map(item => {
            data.push(item.quantidade);
            labels.push(`${item.num_apres} evento(s)`);
        });

        data.push(contagemDoEvento);
        labels.push('Total do Evento Selecionado');

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
            borderWidth: 2,
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

const ultimosCadastros = async (eventoId = 1) => {
    try {
        const Participacao = new ParticipacaoRepository(db.participacao);
        const listaUltimos = await Participacao.listarParticipantesPorEvento(eventoId, db, 20);

        const resposta = [];

        for (const competidor of listaUltimos) {
            const cidade = await localidadesConsumer.cidadePorId(competidor['apresentacao.competidor.comp_cidade']);
            const dataNasc = dataUtils.dataParaString(competidor['apresentacao.competidor.comp_nasc']);
            resposta.push(
                {
                    'idParticipacao': competidor['part_id'],
                    'nomeCompetidor': competidor['apresentacao.competidor.comp_nome_social'],
                    'concurso': competidor['concurso.conc_nome'],
                    'apresentacao': competidor['apresentacao.apres_nome'],
                    'origemApresentacao': competidor['apresentacao.apres_origem'],
                    'dataNascimento': dataNasc,
                    'whatsapp': competidor['apresentacao.competidor.comp_whats'],
                    'cidade': `${cidade.cid_desc} / ${cidade.estado.est_sigla}`,
                }
            );
        }

        return {
            status: 200,
            message: resposta,
        };
    } catch (erro) {
        consoleError(erro);
        throw erro;
    }
}

const faixasEtarias = async (eventoId = 1) => {
    try {
        const Competidor = new CompetidorRepository(db.competidor);
        const competidoresLista = await Competidor.buscarPorEvento(Number(eventoId), db);
        const competidoresIdades = [];
        competidoresLista.forEach(competidor => {
            const idade = calcularIdade(competidor.comp_nasc);
            competidoresIdades.push(idade);
        });
        const faixas = gerarFaixasEtarias(competidoresIdades, 6);
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
            borderWidth: 2,
            barPercentage: 0.5,
            barThickness: 16,
            maxBarThickness: 18,
            minBarLength: 2,
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

const temas = async (concId = 1) => {
    try {
        const Apresentacao = new ApresentacaoRepository(db.apresentacao);
        const apresentacaoLista = await Apresentacao.buscarPartAgruparTema(Number(concId), db);

        apresentacaoLista.sort((a, b) => b['num_tema'] - a['num_tema']);

        const labels = apresentacaoLista.slice(0, 6).map(a => a['apres_nome']);;
        const data = apresentacaoLista.slice(0, 6).map(a => a['num_tema']);

        const outrosTotal = apresentacaoLista.slice(6).reduce((sum, current) => sum + current['num_tema'], 0);

        if (apresentacaoLista.length > 6) {
            labels.push('Outros');
            data.push(outrosTotal);
        }

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
            borderWidth: 2,
            barPercentage: 0.5,
            barThickness: 16,
            maxBarThickness: 18,
            minBarLength: 2,
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
    frequenciaPorEvento,
    faixasEtarias,
    temas,
    vagasConcursos,
    ultimosCadastros,
};

export default graficoService;