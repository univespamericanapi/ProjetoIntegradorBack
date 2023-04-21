export const cospDesf = (sequelize, Sequelize) => {
    const CospDesf = sequelize.define("cosp_desfs", {
        cosp_desf_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cosp_desf_part: { // FK para tabela participacao
            type: Sequelize.INTEGER,
            allowNull: false
        },
        cosp_desf_categ: { // FK para tabela categoria
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, { timestamps: false });

    return CospDesf;
};