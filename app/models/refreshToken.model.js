import { authConfig } from '../config/auth.config.js';
import { v4 as uuidv4 } from 'uuid';

export const refreshToken = (sequelize, Sequelize) => {
    const RefreshToken = sequelize.define('refreshTokens', {
        token: {
            type: Sequelize.STRING
        },
        expiryDate: {
            type: Sequelize.DATE
        },
        userId: {
            type: Sequelize.INTEGER
        }
    });

    RefreshToken.criarToken = async function (usuario) {
        let expiredAt = new Date();

        expiredAt.setSeconds(expiredAt.getSeconds() + authConfig.jwtExpira);

        let token = uuidv4();

        let refreshToken = await this.create({
            token: token,
            refreshToken_usuario: usuario.usuario_id,
            expiryDate: expiredAt.getTime()
        });

        return refreshToken.token;
    };

    RefreshToken.verifyExpiration = token => {
        return token.expiryDate.getTime() < new Date().getTime();
    };

    return RefreshToken;
};