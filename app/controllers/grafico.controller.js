import graficoService from "../services/grafico.service.js";

const competidorPorCidade = async (req, res) => {
    try {
        const resposta = await graficoService.competidorPorCidade(req.params.idEvento);

        return res.status(resposta.status).send(resposta.message);
    } catch (erro) {
        if (erro.status) {
            return res.status(erro.status).send(erro.message);
        }
        return res.status(500).send(erro.message);
    }
};

const competidorPorConcurso = async (req, res) => {
    try {
        const resposta = await graficoService.competidorPorConcurso(req.params.idEvento);

        return res.status(resposta.status).send(resposta.message);
    } catch (erro) {
        if (erro.status) {
            return res.status(erro.status).send(erro.message);
        }
        return res.status(500).send(erro.message);
    }
};

const faixasEtarias = async (req, res) => {
    try {
        const resposta = await graficoService.faixasEtarias(req.params.idEvento);

        return res.status(resposta.status).send(resposta.message);
    } catch (erro) {
        if (erro.status) {
            return res.status(erro.status).send(erro.message);
        }
        return res.status(500).send(erro.message);
    }
};

const graficoController = {
    competidorPorCidade,
    competidorPorConcurso,
    faixasEtarias,
};

export default graficoController;