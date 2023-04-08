import db from "../models/db.model.js";

const checaDuplicadoLogin = async (req, res, next) => {
    const Usuario = db.usuario;

    await Usuario.findOne({
        where: {
            usuario_login: req.body.usuario_login
        }
    }).then(usuario => {
        if (usuario) {
            res.status(400).send({
                message: 'Falha! Usuário já está em uso!'
            });
            return;
        }
        next();
    });
};

const checaCargoExiste = async (req, res, next) => {
    const Cargo = db.cargo;

    await Cargo.findOne({
        where: {
            cargo_nome: req.body.usuario_cargo
        }
    }).then(cargo => {
        if (!cargo) {
            res.status(400).send({
                message: 'Falha! Cargo não existe = ' + req.body.usuario_cargo
            });
            return;
        }
        next();
    });
};

const verificaSignUp = {
    checaDuplicadoLogin,
    checaCargoExiste
};

export default verificaSignUp;