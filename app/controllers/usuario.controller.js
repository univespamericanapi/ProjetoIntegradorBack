import { coresLog } from '../constants/coresLog.constant.js';
import usuarioService from '../services/usuario.service.js';

const criar = async (req, res) => {
    try {
        const resposta = await usuarioService.criar(req.body);

        delete req.body.usuario_senha;

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

const listar = async (req, res) => {
    try {
        const resposta = await usuarioService.listar();

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

const deletar = async (req, res) => {
    try {
        const resposta = await usuarioService.deletar(req.params.idUsuario);

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

const atualizarPorAdmin = async (req, res) => {
    try {
        const resposta = await usuarioService.atualizarPorAdmin(req.params.idUsuario, req.body);;

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

const atualizar = async (req, res) => {
    try {
        const resposta = await usuarioService.atualizar(req.params.idUsuario, req.body);;

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

const buscarPorId = async (req, res) => {
    try {
        const resposta = await usuarioService.buscarPorId(req.params.idUsuario);

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

const buscarPorLogin = async (req, res) => {
    try {
        const resposta = await usuarioService.buscarPorLogin(req.query.login);

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

const usuarioController = {
    criar,
    listar,
    deletar,
    atualizarPorAdmin,
    atualizar,
    buscarPorId,
    buscarPorLogin,
}

export default usuarioController;