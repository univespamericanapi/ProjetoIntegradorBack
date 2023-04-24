import UsuarioRepository from '../repositories/usuario.repository.js';
import RefreshTokenRepository from '../repositories/refreshToken.repository.js';
import db from '../models/db.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import verifica from '../helpers/verificacao.helpper.js';

const login = async (login) => {
    try {
        const Usuario = new UsuarioRepository(db.usuario);
        const RefreshToken = new RefreshTokenRepository(db.refreshToken);

        const usuario = await Usuario.buscarPorLogin(login.usuario_login);

        verifica.registroExiste(usuario, Usuario.nome);

        const senhaEValida = bcrypt.compareSync(
            login.usuario_senha,
            usuario.usuario_senha
        );

        verifica.senha(senhaEValida);

        const token = jwt.sign({ id: usuario.usuario_id }, config.segredo, {
            expiresIn: config.jwtExpira
        });

        let refreshToken = await RefreshToken.criarToken(usuario);

        const resposta = {
            ...await Usuario.usuarioView(usuario),
            accessToken: token,
            refreshToken: refreshToken
        };


        return {
            status: 200,
            message: resposta,
        };
    } catch (erro) {
        throw erro;
    }
};

const refreshToken = async (requestToken) => {
    try {
        const RefreshToken = new RefreshTokenRepository(db.refreshToken);

        verifica.faltaParametro(requestToken, RefreshToken.nome);

        const refreshToken = await RefreshToken.buscaPorToken(requestToken);

        verifica.registroExiste(refreshToken, RefreshToken.nome);

        if (await RefreshToken.verificaExpirado(refreshToken)) {
            await RefreshToken.deletarPorId(refreshToken.id);

            verifica.refreshTokenExpirado();
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