import criaUsuarioService from '../services/usuario.service.js';

const criar = async (req, res) => {
    try {
        const resposta = await criaUsuarioService(req.body);

        delete req.body.usuario_senha;

        return res.status(resposta.status).send(resposta.message);
    } catch (erro) {
        if (erro.status) {
            return res.status(erro.status).send(erro.message);
        }
        return res.status(500).send(erro.message);
    }
};

const usuarioController = {
    criar,
}

export default usuarioController;