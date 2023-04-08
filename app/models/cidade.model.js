export const cidade = (sequelize, Sequelize) => {
    const Cidade = sequelize.define("cidades", {
        cid_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cid_desc: {
            type: Sequelize.STRING(250),
            allowNull: false
        },
        cid_estado: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, { timestamps: false });

    return Cidade;
};