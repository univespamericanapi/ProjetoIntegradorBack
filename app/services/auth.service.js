import UsuarioRepository from '../repositories/usuario.repository.js';
import RefreshTokenRepository from '../repositories/refreshToken.repository.js';
import db from '../models/db.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import { mensagensConstant } from '../constants/mensagens.constant.js';
import CustomError from '../helpers/customError.helper.js';
import usuarioUtils from '../utils/usuario.util.js';

const login = async (login) => {
    try {
        const Usuario = new UsuarioRepository(db.usuario);
        const RefreshToken = new RefreshTokenRepository(db.refreshToken);

        const usuario = await Usuario.buscarPorLogin(login.usuario_login);

        const senhaEValida = bcrypt.compareSync(
            login.usuario_senha,
            usuario.usuario_senha
        );

        if (!senhaEValida) {
            throw new CustomError(
                401,
                mensagensConstant.senhaInvalida,
            );
        }

        const token = jwt.sign({ id: usuario.usuario_id }, config.segredo, {
            expiresIn: config.jwtExpira
        });

        let refreshToken = await RefreshToken.criarToken(usuario);

        let autoridade = await usuarioUtils.cargoExibir(usuario);

        return {
            status: 200,
            message: {
                usuario_id: usuario.usuario_id,
                usuario_login: usuario.usuario_login,
                usuario_nome: usuario.usuario_nome,
                usuario_cargo: autoridade,
                accessToken: token,
                refreshToken: refreshToken,
            },
        };
    } catch (erro) {
        throw erro;
    }
};

const refreshToken = async (requestToken) => {
    try {
        const RefreshToken = new RefreshTokenRepository(db.refreshToken);

        if (!requestToken) {
            throw new CustomError(
                403,
                mensagensConstant.refreshTokenNaoEnviado,
            );
        }

        const refreshToken = await RefreshToken.buscaPorToken(requestToken);

        if (await RefreshToken.verificaExpirado(refreshToken)) {
            await RefreshToken.deletarPorId(refreshToken.id);

            throw new CustomError(
                403,
                mensagensConstant.refreshTokenExpirou,
            );
        }

        const usuario = await refreshToken.getUsuario();
        const newAccessToken = jwt.sign({ id: usuario.usuario_id }, config.segredo, {
            expiresIn: config.jwtExpira
        });

        return {
            status: 200,
            message: {
                accessToken: newAccessToken,
                refreshToken: refreshToken.token,
            },
        };
    } catch (erro) {
        throw erro;
    }
};

const authService = {
    login,
    refreshToken,
};

export default authService;