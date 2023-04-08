export const personagem = (sequelize, Sequelize) => {
    const Personagem = sequelize.define("personagens", {
        pers_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        pers_part: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        pers_nome: {
            type: Sequelize.STRING(250),
            allowNull: false
        },
        pers_origem: {
            type: Sequelize.STRING(250),
            allowNull: false
        },
        pers_link: {
            type: Sequelize.STRING(250),
            allowNull: false
        },
        pers_aceite: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    }, { timestamps: false });

    return Personagem;
};