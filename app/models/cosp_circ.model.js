export const cospCirc = (sequelize, Sequelize) => {
    const CospCirc = sequelize.define("cosp_circs", {
        cosp_circ_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cosp_circ_part: { // FK para tabela participacao
            type: Sequelize.INTEGER,
            allowNull: false
        },
        cosp_circ_integ: {
            type: Sequelize.TEXT('tiny')
        },
        cosp_circ_estil: { // FK para tabela estilo
            type: Sequelize.INTEGER,
            allowNull: false
        },
        cosp_circ_link_av: {
            type: Sequelize.STRING(250),
            allowNull: false
        }
    }, { timestamps: false });

    return CospCirc;
};