import concursoService from '../services/concurso.service.js';

const listarPorEvento = async (req, res) => {
	try {
		const resposta = await concursoService.buscarPorEvento(req.params.idEvento);

		return res.status(resposta.status).send(resposta.message);
	} catch (erro) {
		if (erro.status) {
			return res.status(erro.status).send(erro.message);
		}
		return res.status(500).send(erro.message);
	}
};

const atualizar = async (req, res) => {
	try {
		const resposta = await concursoService.atualizar(
			req.params.idConcurso,
			req.body
		);

		return res.status(resposta.status).send(resposta.message);
	} catch (erro) {
		if (erro.status) {
			return res.status(erro.status).send(erro.message);
		}
		return res.status(500).send(erro.message);
	}
};

const concursoController = {
	listarPorEvento,
	atualizar,
};

export default concursoController;
