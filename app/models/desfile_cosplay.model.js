export const desfileCosplay = (sequelize, Sequelize) => {
    const DesfileCosplay = sequelize.define("desfile_cosplays", {
        desf_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        desf_event: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        desf_pers: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        desf_conf: {
            type: Sequelize.BOOLEAN
        },
        desf_ordem: {
            type: Sequelize.INTEGER
        },
        desf_categ: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        desf_extra: {
            type: Sequelize.STRING(250)
        }
    });

    return DesfileCosplay;
};