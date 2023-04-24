export const kpopCirc = (sequelize, Sequelize) => {
    const KpopCirc = sequelize.define("kpop_circ", {
        extra_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        extra_part: { // FK para tabela participacao
            type: Sequelize.INTEGER,
            allowNull: false
        },
        extra_integ: {
            type: Sequelize.TEXT('tiny')
        },
        extra_link_av: {
            type: Sequelize.STRING(250),
            allowNull: false
        },
        extra_mat: {
            type: Sequelize.STRING(250),
        }
    }, { timestamps: false });

    return KpopCirc;
};