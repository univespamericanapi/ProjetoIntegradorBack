import { coresLog } from '../constants/coresLog.constant.js';
import emailService from '../services/email.service.js';

const verificarEmail = async (req, res) => {
	try {
		const id = req.params.id;
		const token = req.params.token;
		const resposta = await emailService.verificarEmail(
			id,
			token
		);

		return res
			.status(resposta.status)
			.send(resposta.message);
	} catch (erro) {
		if (erro.status) {
			console.log(
				`${coresLog.FgRed}${erro.date}: ${erro.message}${coresLog.Reset}`
			);
			return res.status(erro.status).send(erro.message);
		}
		console.log(
			`${coresLog.FgRed}${erro}${coresLog.Reset}`
		);
		return res.status(500).send(erro.message);
	}
};

const reenviar = async (req, res) => {
	try {
		const resposta = await emailService.reenviar(
			req.query.email
		);

		return res
			.status(resposta.status)
			.send(resposta.message);
	} catch (erro) {
		if (erro.status) {
			console.log(
				`${coresLog.FgRed}${erro.date}: ${erro.message}${coresLog.Reset}`
			);
			return res.status(erro.status).send(erro.message);
		}
		console.log(
			`${coresLog.FgRed}${erro}${coresLog.Reset}`
		);
		return res.status(500).send(erro.message);
	}
};

const alterarEmail = async (req, res) => {
	try {
		const resposta = await emailService.alterarEmail(
			req.body.comp_cpf,
			req.body.comp_nasc,
			req.body.comp_email
		);

		return res
			.status(resposta.status)
			.send(resposta.message);
	} catch (erro) {
		if (erro.status) {
			console.log(
				`${coresLog.FgRed}${erro.date}: ${erro.message}${coresLog.Reset}`
			);
			return res.status(erro.status).send(erro.message);
		}
		console.log(
			`${coresLog.FgRed}${erro}${coresLog.Reset}`
		);
		return res.status(500).send(erro.message);
	}
};

const emailController = {
	verificarEmail,
	reenviar,
	alterarEmail,
};

export default emailController;
