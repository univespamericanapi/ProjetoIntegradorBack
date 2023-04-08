export const cargo = (sequelize, Sequelize) => {
    const Cargo = sequelize.define("cargos", {
        cargo_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cargo_nome: {
            type: Sequelize.STRING(255),
            allowNull: false
        }
    }, { timestamps: false });

    return Cargo;
};