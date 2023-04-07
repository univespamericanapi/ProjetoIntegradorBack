import { configAuth } from '../config/auth.config.js';
import { v4 as uuidv4 } from 'uuid';

export const refreshToken = (sequelize, Sequelize) => {
    const RefreshToken = sequelize.define('refreshToken', {
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

    RefreshToken.createToken = async function (user) {
        let expiredAt = new Date();

        expiredAt.setSeconds(expiredAt.getSeconds() + configAuth.jwtRefreshExpiration);

        let token = uuidv4();

        let refreshToken = await this.create({
            token: token,
            userId: user.idUser,
            expiryDate: expiredAt.getTime()
        });

        return refreshToken.token;
    };

    RefreshToken.verifyExpiration = token => {
        return token.expiryDate.getTime() < new Date().getTime();
    };

    return RefreshToken;
};