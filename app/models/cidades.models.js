export const cidades = (sequelize, Sequelize) => {
    const Cidades = sequelize.define("cidades", {
        idCidade: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cidade: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        estado: {
            type: Sequelize.STRING(255),
            allowNull: false
        }
    });

    return Cidades;
};