import db from '../models/db.model.js';
import { authConfig } from '../config/auth.config.js';
import { segredoConfig } from '../config/segredos.config.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const { usuario: Usuario, cargo: Cargo, refreshToken: RefreshToken } = db;
const Op = db.Sequelize.Op;

const signup = async (req, res) => {
    await Cargo.findOne({
        where: {
            cargo_nome: req.body.cargo
        }
    }).then(cargo => {
        Usuario.create({
            usuario_login: req.body.login,
            usuario_senha: bcrypt.hashSync(req.body.senha, 8),
            usuario_nome: req.body.nome,
            usuario_cargo: cargo.cargo_id
        }).then(() => {
            res.send({ message: 'Usuário foi registrado com sucesso!' });
        });
    });
};

const signin = (req, res) => {
    Usuario.findOne({
        where: {
            usuario_login: req.body.login
        }
    }).then(async usuario => {
        if (!usuario) {
            return res.status(404).send({
                message: 'Usuário não encontrado.'
            });
        }

        const senhaEValida = bcrypt.compareSync(
            req.body.senha,
            usuario.usuario_senha
        );

        if (!senhaEValida) {
            return res.status(401).send({
                accessToken: null,
                message: 'Senha inválida!'
            });
        }

        const token = jwt.sign({ id: usuario.usuario_id }, segredoConfig, {
            expiresIn: authConfig.jwtExpira
        });

        let refreshToken = await RefreshToken.criarToken(usuario);

        let autoridade = "";
        usuario.getCargo().then(cargo => {
            autoridade = 'ROLE_' + cargo.cargo_nome.toUpperCase();

            res.status(200).send({
                usuario_id: usuario.usuario_id,
                login: usuario.usuario_login,
                nome: usuario.usuario_nome,
                cargo: autoridade,
                accessToken: token,
                refreshToken: refreshToken
            });
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

const refreshToken = async (req, res) => {
    const { refreshToken: requestToken } = req.body;

    if (requestToken == null) {
        return res.status(403).send({ message: 'Refresh Token é requerido!' });
    }

    try {
        let refreshToken = await RefreshToken.findOne({
            where: { token: requestToken }
        });

        if (!refreshToken) {
            return res
                .status(403)
                .send({ message: 'Refresh token não está no banco de dados!' });
        }

        if (RefreshToken.verifyExpiration(refreshToken)) {
            RefreshToken.destroy({ where: { id: refreshToken.id } });

            return res.status(403).send({
                message: 'Refresh token expirou. Por favor, faça um novo login!'
            });
        }

        const usuario = await refreshToken.getUsuario();
        let newAccessToken = jwt.sign({ id: usuario.usuario_id }, segredoConfig, {
            expiresIn: authConfig.jwtExpira
        });

        return res.status(200).send({
            accessToken: newAccessToken,
            refreshToken: refreshToken.token
        });
    } catch (err) {
        return res.status(500).send({ message: err });
    }
};

const authCtrl = {
    signup,
    signin,
    refreshToken
};

export default authCtrl;