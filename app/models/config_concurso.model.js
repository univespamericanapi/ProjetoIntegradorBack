export const configConcurso = (sequelize, Sequelize) => {
    const ConfigConcurso = sequelize.define("configs_concursos", {
        config_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        config_event: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        config_concurso: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        config_limit_inscr: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        config_limit_espera: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        config_limit_checkin: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        config_ativo: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    }, { timestamps: false });

    return ConfigConcurso;
};