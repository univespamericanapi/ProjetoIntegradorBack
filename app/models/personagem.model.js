export const personagem = (sequelize, Sequelize) => {
    const Personagem = sequelize.define("personagems", {
        idPersonagem: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idParticipante: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        origem: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        link_referencia: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        aceite_regulamento: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    });

    return Personagem;
};