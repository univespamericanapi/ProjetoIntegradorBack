import jwt from 'jsonwebtoken';
import db from '../models/db.model.js';
import { segredoConfig } from '../config/segredos.config.js';

const Usuario = db.usuario;
const { TokenExpiredError } = jwt;

const adminNomeCargo = "admin";
const staffNomeCargo = "staff";

const catchError = (err, res) => {
    if (err instanceof TokenExpiredError) {
        return res.status(401).send({
            message: 'Não autorizado! Access Token expirou!'
        });
    }
    return res.status(401).send({
        message: 'Não autorizado!'
    });
};

const verificaToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).send({
            message: 'Nenhum token foi fornecido!'
        });
    }

    jwt.verify(token, segredoConfig, (err, decoded) => {
        if (err) {
            return catchError(err, res);
        }

        req.usuario_id = decoded.id;
        next();
    });
};

const eAdmin = (req, res, next) => {
    Usuario.findByPk(req.usuario_id).then(usuario => {
        usuario.getCargo().then(cargo => {
            if (cargo.cargo_nome === adminNomeCargo) {
                next();
                return;
            }

            res.status(403).send({
                message: 'Requerido cargo de Administrador!'
            });
            return;
        });
    });
}

const eStaff = (req, res, next) => {
    Usuario.findByPk(req.usuario_id).then(usuario => {
        usuario.getCargo().then(cargo => {
            if (cargo.cargo_nome === adminNomeCargo ||
                cargo.cargo_nome === staffNomeCargo) {
                next();
                return;
            }

            res.status(403).send({
                message: 'Requerido cargo de Staff ou de Administrador!'
            });
            return;
        });
    });
}

const authJwt = {
    verificaToken,
    eAdmin,
    eStaff
};

export default authJwt;