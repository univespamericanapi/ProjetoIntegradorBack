import { coresLog } from '../constants/coresLog.constant.js';
import eventoService from '../services/evento.service.js';

const criar = async (req, res) => {
	try {
		const resposta = await eventoService.criar(req.body);

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

const listar = async (req, res) => {
	try {
		const resposta = await eventoService.listar();

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

const deletar = async (req, res) => {
	try {
		const resposta = await eventoService.deletar(req.params.idEvento);

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
		const resposta = await eventoService.atualizar(
			req.params.idEvento,
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

const buscarPorId = async (req, res) => {
	try {
		const resposta = await eventoService.buscarPorId(req.params.idEvento);

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

const eventoController = {
	criar,
	listar,
	deletar,
	atualizar,
	buscarPorId,
};

export default eventoController;
