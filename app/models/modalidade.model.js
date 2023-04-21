export const modalidade = (sequelize, Sequelize) => {
    const Modalidade = sequelize.define("modalidades", {
        mod_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        mod_nome: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    }, { timestamps: false });

    return Modalidade;
};