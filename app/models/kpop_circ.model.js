export const kpopCirc = (sequelize, Sequelize) => {
    const KpopCirc = sequelize.define("kpop_circs", {
        kpop_circ_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        kpop_circ_part: { // FK para tabela participacao
            type: Sequelize.INTEGER,
            allowNull: false
        },
        kpop_circ_integ: {
            type: Sequelize.TEXT('tiny')
        },
        kpop_circ_link_av: {
            type: Sequelize.STRING(250),
            allowNull: false
        },
        kpop_circ_mat: {
            type: Sequelize.STRING(250),
        }
    }, { timestamps: false });

    return KpopCirc;
};