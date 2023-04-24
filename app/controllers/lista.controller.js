import { coresLog } from "../constants/coresLog.constant.js";
import listaService from "../services/lista.service.js";

const cargo = async (req, res) => {
    try {
        const resposta = await listaService.listarCargos();

        return res.status(resposta.status).send(resposta.message);
    } catch (erro) {
        if (erro.status) {
            console.log(`${coresLog.FgRed}${erro.date}: ${erro.message}${coresLog.Reset}`);
            return res.status(erro.status).send(erro.message);
        }
        console.log(`${coresLog.FgRed}${erro}${coresLog.Reset}`);
        return res.status(500).send(erro.message);
    }
};

const categoria = async (req, res) => {
    try {
        const resposta = await listaService.listarCategorias();

        return res.status(resposta.status).send(resposta.message);
    } catch (erro) {
        if (erro.status) {
            console.log(`${coresLog.FgRed}${erro.date}: ${erro.message}${coresLog.Reset}`);
            return res.status(erro.status).send(erro.message);
        }
        console.log(`${coresLog.FgRed}${erro}${coresLog.Reset}`);
        return res.status(500).send(erro.message);
    }
};

const cidade = async (req, res) => {
    try {
        const resposta = await listaService.listarCidades(req.query.estado);

        return res.status(resposta.status).send(resposta.message);
    } catch (erro) {
        if (erro.status) {
            console.log(`${coresLog.FgRed}${erro.date}: ${erro.message}${coresLog.Reset}`);
            return res.status(erro.status).send(erro.message);
        }
        console.log(`${coresLog.FgRed}${erro}${coresLog.Reset}`);
        return res.status(500).send(erro.message);
    }
};

const estado = async (req, res) => {
    try {
        const resposta = await listaService.listarEstados();

        return res.status(resposta.status).send(resposta.message);
    } catch (erro) {
        if (erro.status) {
            console.log(`${coresLog.FgRed}${erro.date}: ${erro.message}${coresLog.Reset}`);
            return res.status(erro.status).send(erro.message);
        }
        console.log(`${coresLog.FgRed}${erro}${coresLog.Reset}`);
        return res.status(500).send(erro.message);
    }
};

const estilo = async (req, res) => {
    try {
        const resposta = await listaService.listarEstilos();

        return res.status(resposta.status).send(resposta.message);
    } catch (erro) {
        if (erro.status) {
            console.log(`${coresLog.FgRed}${erro.date}: ${erro.message}${coresLog.Reset}`);
            return res.status(erro.status).send(erro.message);
        }
        console.log(`${coresLog.FgRed}${erro}${coresLog.Reset}`);
        return res.status(500).send(erro.message);
    }
};

const modalidade = async (req, res) => {
    try {
        const resposta = await listaService.listarModalidades();

        return res.status(resposta.status).send(resposta.message);
    } catch (erro) {
        if (erro.status) {
            console.log(`${coresLog.FgRed}${erro.date}: ${erro.message}${coresLog.Reset}`);
            return res.status(erro.status).send(erro.message);
        }
        console.log(`${coresLog.FgRed}${erro}${coresLog.Reset}`);
        return res.status(500).send(erro.message);
    }
};

const evento = async (req, res) => {
    try {
        const resposta = await listaService.listarEventos();

        return res.status(resposta.status).send(resposta.message);
    } catch (erro) {
        if (erro.status) {
            console.log(`${coresLog.FgRed}${erro.date}: ${erro.message}${coresLog.Reset}`);
            return res.status(erro.status).send(erro.message);
        }
        console.log(`${coresLog.FgRed}${erro}${coresLog.Reset}`);
        return res.status(500).send(erro.message);
    }
};

const concurso = async (req, res) => {
    try {
        const resposta = await listaService.listarConcursos(req.params.idEvento);

        return res.status(resposta.status).send(resposta.message);
    } catch (erro) {
        if (erro.status) {
            console.log(`${coresLog.FgRed}${erro.date}: ${erro.message}${coresLog.Reset}`);
            return res.status(erro.status).send(erro.message);
        }
        console.log(`${coresLog.FgRed}${erro}${coresLog.Reset}`);
        return res.status(500).send(erro.message);
    }
};

const listaController = {
    cidade,
    estado,
    cargo,
    categoria,
    estilo,
    modalidade,
    evento,
    concurso,
};

export default listaController;