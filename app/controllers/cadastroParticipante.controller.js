import cadastroParticipanteService from "../services/cadastroParticipante.service.js";

const criar = async (req, res) => {
    try {
        const resposta = await cadastroParticipanteService.criar(
            req.body.competidor,
            req.body.apresentacao,
            req.body.participacao,
            req.body.extra,
        );

        return res.status(resposta.status).send(resposta.message);
    } catch (erro) {
        if (erro.status) {
            return res.status(erro.status).send(erro.message);
        }
        return res.status(500).send(erro.message);
    }
};

const cadastroParticipanteController = {
    criar,
};

export default cadastroParticipanteController;
