import jwt from 'jsonwebtoken';
import db from '../models/db.model.js';
import config from '../config/config.js';
import { mensagensConstant } from '../constants/mensagens.constant.js';
import UsuarioRepository from '../repositories/usuario.repository.js';
import CustomError from '../helpers/customError.helper.js';
import verifica from '../helpers/verificacao.helpper.js';

const catchError = (err, res) => {
    if (err instanceof jwt.TokenExpiredError) {
        return res.status(401).send({
            message: mensagensConstant.tokenExpirou
        });
    }
    return res.status(401).send({
        message: mensagensConstant.naoAutorizado
    });
};

const verificaToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).send({
            message: mensagensConstant.tokenNaoEnviado
        });
    }

    jwt.verify(token, config.segredo, (err, decoded) => {
        if (err) {
            return catchError(err, res);
        }

        req.usuario_id = decoded.id;
        next();
    });
};

const eAdmin = async (req, res, next) => {
    const Usuario = new UsuarioRepository(db.usuario);

    const usuario = await Usuario.buscarPorId(req.usuario_id);

    await usuario.getCargo().then(cargo => {
        if (cargo.cargo_nome === config.adminCargoNome) {
            next();
            return;
        }

        res.status(403).send({
            message: mensagensConstant.requeridoAdm
        });
        return;
    });
}

const eStaff = async (req, res, next) => {
    const Usuario = new UsuarioRepository(db.usuario);

    const usuario = await Usuario.buscarPorId(req.usuario_id);
    await usuario.getCargo().then(cargo => {
        if (cargo.cargo_nome === config.adminCargoNome ||
            cargo.cargo_nome === config.staffNomeCargo) {
            next();
            return;
        }

        res.status(403).send({
            message: mensagensConstant.requeridoStaff
        });
        return;
    });
}

const eOProprio = async (req, res, next) => {
    const Usuario = new UsuarioRepository(db.usuario);
    let idUsuarioAltera = Number(req.params.idUsuario);

    try {
        if (!idUsuarioAltera) {
            const usuario = await Usuario.buscarPorLogin(req.query.login);

            verifica.registroExiste(usuario, Usuario);

            idUsuarioAltera = usuario.usuario_id;
        }
    } catch (erro) {
        if (erro.status) {
            return res.status(erro.status).send(erro.message);
        }
        return res.status(500).send(erro.message);
    }

    const usuario = await Usuario.buscarPorId(req.usuario_id);

    await usuario.getCargo().then(cargo => {
        if (cargo.cargo_nome === config.adminCargoNome ||
            usuario.usuario_id === idUsuarioAltera) {
            next();
            return;
        }

        res.status(403).send({
            message: mensagensConstant.naoAutorizado
        });
        return;
    });
}

const authJwt = {
    verificaToken,
    eAdmin,
    eStaff,
    eOProprio
};

export default authJwt;