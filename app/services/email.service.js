import db from '../models/db.model.js';
import EmailTokenRepository from '../repositories/emailToken.repository.js';
import CompetidorRepository from '../repositories/competidor.repository.js';
import verifica from '../utils/verificacao.util.js';
import nodemailer from 'nodemailer';
import config from '../config/config.js';
import { v4 as uuidv4 } from 'uuid';
import { mensagensConstant } from '../constants/mensagens.constant.js';
import consoleError from "../utils/consoleError.util.js";

const verificarEmail = async (id, token) => {
	try {
		const Competidor = new CompetidorRepository(db.competidor);
		const EmailToken = new EmailTokenRepository(db.emailToken);

		const competidor = await Competidor.buscarPorId(id);

		verifica.registroExiste(competidor, Competidor.nome);

		const emailToken = await EmailToken.buscaPorToken(id, token);

		verifica.registroExiste(emailToken, EmailToken.nome);

		let message;

		if (emailToken.tipo_inscr === 'Inscrição') {
			message = mensagensConstant.inscrito;
		} else {
			message = mensagensConstant.filaDeEspera;
		}

		await Competidor.atualizarPorId(id, {
			comp_email_verif: true,
		});

		await EmailToken.deletarPorId(emailToken.id);

		return {
			status: 200,
			message: message,
		};
	} catch (erro) {
		consoleError(erro);
		throw erro;
	}
};

const enviarEmail = async (email, assunto, texto) => {
	try {
		const transportador = nodemailer.createTransport(config.email);

		await transportador.sendMail({
			from: config.email.auth.user,
			to: email,
			subject: assunto,
			text: texto,
		});

		return mensagensConstant.participacaoRegistrada;
	} catch (erro) {
		consoleError(erro);
		throw erro;
	}
};

const reenviar = async (email) => {
	try {
		const Competidor = new CompetidorRepository(db.competidor);
		const EmailToken = new EmailTokenRepository(db.emailToken);

		const competidor = await Competidor.buscarPorEmail(email);
		verifica.registroExiste(competidor);
		const emailToken = await EmailToken.buscaPorCompetidor(competidor.comp_id);
		verifica.registroExiste(emailToken);

		const emailCorpo = gerarMensagem(
			competidor.comp_nome_social,
			competidor.comp_id,
			emailToken.token
		);

		const resposta = await enviarEmail(
			competidor.comp_id,
			emailCorpo.assunto,
			emailCorpo.mensagem
		);

		return {
			status: 200,
			message: resposta,
		};
	} catch (erro) {
		consoleError(erro);
		throw erro;
	}
};

const alterarEmail = async (cpf, nasc, email) => {
	try {
		const Competidor = new CompetidorRepository(db.competidor);

		const competidor = await Competidor.buscarPorCpfNasc(cpf, nasc);
		verifica.registroExiste(competidor);

		const resposta = await Competidor.atualizarPorId(competidor.comp_id, {
			comp_email: email,
		});

		return {
			status: 200,
			message: resposta,
		};
	} catch (erro) {
		consoleError(erro);
		throw erro;
	}
};

const criarToken = async (competidor, tipo) => {
	try {
		const registro = {
			token: uuidv4(),
			emailToken_comp: competidor.comp_id,
			tipo_inscr: tipo,
		};

		return registro;
	} catch (erro) {
		consoleError(erro);
		throw erro;
	}
};

const gerarMensagem = (nome, comp_id, token) => {
	return {
		assunto: 'E-mail de verificação. Não responda esse e-mail!',
		mensagem: `Olá ${nome},

    Verifique seu e-mail clicando no link abaixo:
        
    ${config.baseUrlEmail}/cadastro/verificar/${comp_id}/${token}
        
    A Avalon Eventos agradece a sua participação.`,
	};
};

const emailService = {
	verificarEmail,
	enviarEmail,
	criarToken,
	reenviar,
	alterarEmail,
	gerarMensagem,
};

export default emailService;
