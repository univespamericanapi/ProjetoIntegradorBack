export const kpopSolo = (sequelize, Sequelize) => {
    const KpopSolo = sequelize.define("kpop_solos", {
        kpop_solo_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        kpop_solo_part: { // FK para tabela participacao
            type: Sequelize.INTEGER,
            allowNull: false
        },
        kpop_solo_integ: {
            type: Sequelize.TEXT('tiny')
        },
        kpop_solo_mod: { // FK para tabela modalidade
            type: Sequelize.INTEGER,
            allowNull: false
        },
        kpop_solo_link_av: {
            type: Sequelize.STRING(250),
            allowNull: false
        }
    }, { timestamps: false });

    return KpopSolo;
};