export const emailToken = (sequelize, Sequelize) => {
    const EmailToken = sequelize.define('emailTokens', {
        token: {
            type: Sequelize.STRING
        },
        emailToken_comp: {  // FK para tabela competidor
            type: Sequelize.INTEGER
        }
    }, { timestamps: false });

    return EmailToken;
};