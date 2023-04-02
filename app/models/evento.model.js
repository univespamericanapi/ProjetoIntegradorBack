export const evento = (sequelize, Sequelize) => {
    const Evento = sequelize.define("eventos", {
        idEvento: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        cidade: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        edicao: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        ano: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    return Evento;
};