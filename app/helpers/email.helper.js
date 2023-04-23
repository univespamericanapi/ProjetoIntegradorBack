import nodemailer from 'nodemailer';
import config from '../config/config.js';

const enviarEmail = async (email, assunto, texto) => {
    try {
        const transportador = nodemailer.createTransport(config.email);

        await transportador.sendMail({
            from: config.email.auth.user,
            to: email,
            subject: assunto,
            text: texto,
        });
    } catch (erro) {
        throw erro;
    }
};

export default enviarEmail;