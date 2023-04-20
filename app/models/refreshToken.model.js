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
    }, { timestamps: false });

    return RefreshToken;
};