import { coresLog } from '../constants/coresLog.constant.js';
import concursoService from '../services/concurso.service.js';

const listarPorEvento = async (req, res) => {
	try {
		const resposta = await concursoService.buscarPorEvento(req.params.idEvento);

		return res.status(resposta.status).send(resposta.message);
	} catch (erro) {
		if (erro.status) {
			console.log(
				`${coresLog.FgRed}${erro.date}: ${erro.message}${coresLog.Reset}`
			);
			return res.status(erro.status).send(erro.message);
		}
		console.log(`${coresLog.FgRed}${erro}${coresLog.Reset}`);
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
			console.log(
				`${coresLog.FgRed}${erro.date}: ${erro.message}${coresLog.Reset}`
			);
			return res.status(erro.status).send(erro.message);
		}
		console.log(`${coresLog.FgRed}${erro}${coresLog.Reset}`);
		return res.status(500).send(erro.message);
	}
};

const concursoController = {
	listarPorEvento,
	atualizar,
};

export default concursoController;
