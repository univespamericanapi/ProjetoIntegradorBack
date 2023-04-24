import db from "../models/db.model.js";
import EmailTokenRepository from "../repositories/emailToken.repository.js";
import CompetidorRepository from "../repositories/competidor.repository.js";
import verifica from "../helpers/verificacao.helpper.js";
import nodemailer from 'nodemailer';
import config from '../config/config.js';
import { v4 as uuidv4 } from 'uuid';
import { mensagensConstant } from "../constants/mensagens.constant.js";

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
            comp_email_verif: true
        });

        await EmailToken.deletarPorId(emailToken.id);

        return {
            status: 200,
            message: message,
        }
    } catch (erro) {
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
        throw erro;
    }
};

const emailService = {
    verificarEmail,
    enviarEmail,
    criarToken,
};

export default emailService;