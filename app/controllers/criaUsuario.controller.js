import criaUsuarioService from '../services/criaUsuario.service.js';

const criaUsuarioController = async (req, res) => {
    try {
        const resposta = await criaUsuarioService(req.body);

        return res.status(resposta.status).send(resposta.message);
    } catch (erro) {
        if (erro.status) {
            return res.status(erro.status).send(erro.message);
        }
        return res.status(500).send(erro.message);
    }
};

export default criaUsuarioController;