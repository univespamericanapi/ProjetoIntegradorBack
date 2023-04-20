import usuarioService from '../services/usuario.service.js';

const criar = async (req, res) => {
    try {
        const resposta = await usuarioService.criar(req.body);

        delete req.body.usuario_senha;

        return res.status(resposta.status).send(resposta.message);
    } catch (erro) {
        if (erro.status) {
            return res.status(erro.status).send(erro.message);
        }
        return res.status(500).send(erro.message);
    }
};

const listar = async (req, res) => {
    try {
        const resposta = await usuarioService.listar();

        return res.status(resposta.status).send(resposta.message);
    } catch (erro) {
        if (erro.status) {
            return res.status(erro.status).send(erro.message);
        }
        return res.status(500).send(erro.message);
    }
};

const deletar = async (req, res) => {
    try {
        const resposta = "";

    } catch (erro) {
        if (erro.status) {
            return res.status(erro.status).send(erro.message);
        }
        return res.status(500).send(erro.message);
    }
};

const alterar = async (req, res) => {
    try {
        const resposta = "";

    } catch (erro) {
        if (erro.status) {
            return res.status(erro.status).send(erro.message);
        }
        return res.status(500).send(erro.message);
    }
};

const buscarPorId = async (req, res) => {
    try {
        const resposta = "";

    } catch (erro) {
        if (erro.status) {
            return res.status(erro.status).send(erro.message);
        }
        return res.status(500).send(erro.message);
    }
};

const buscarPorLogin = async (req, res) => {
    try {
        const resposta = "";

    } catch (erro) {
        if (erro.status) {
            return res.status(erro.status).send(erro.message);
        }
        return res.status(500).send(erro.message);
    }
};

const usuarioController = {
    criar,
    listar,
    deletar,
    alterar,
    buscarPorId,
    buscarPorLogin,
}

export default usuarioController;