export const cidades = (sequelize, Sequelize) => {
    const Cidades = sequelize.define("cidades", {
        estado: {
            type: Sequelize.STRING(255),
            primaryKey: true,
            allowNull: false
        },
        cidade: {
            type: Sequelize.STRING(255),
            primaryKey: true,
            allowNull: false
        }
    });

    return Cidades;
};