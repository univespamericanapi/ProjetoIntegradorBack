import checkinService from "../services/checkin.service.js";

const registrarCheckin = async (req, res) => {
    try {
        const resposta = await checkinService.registrarCheckin(req.params.partId);

        return res.status(resposta.status).send(resposta.message);
    } catch (erro) {
        if (erro.status) {
            return res.status(erro.status).send(erro.message);
        }
        return res.status(500).send(erro.message);
    }
};

const listarInscricoes = async (req, res) => {
    try {
        const concId = req.query.concId;
        const espera = req.query.espera;

        const resposta = await checkinService.listarInscricoes(concId, espera);

        return res.status(resposta.status).send(resposta.message);
    } catch (erro) {
        if (erro.status) {
            return res.status(erro.status).send(erro.message);
        }
        return res.status(500).send(erro.message);
    }
};

const checkinController = {
    registrarCheckin,
    listarInscricoes,
};

export default checkinController;