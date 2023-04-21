export const participacao = (sequelize, Sequelize) => {
    const Participacao = sequelize.define("participacoes", {
        part_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        part_event: { // FK para tabela evento
            type: Sequelize.INTEGER,
            allowNull: false
        },
        part_apres: { // FK para tabela apresentacao
            type: Sequelize.INTEGER,
            allowNull: false
        },
        part_checkin: {
            type: Sequelize.BOOLEAN
        },
        part_ordem: {
            type: Sequelize.INTEGER
        },
        part_regul: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        part_status: {
            type: Sequelize.STRING(250)
        },
        part_obs: {
            type: Sequelize.TEXT('medium')
        },
        part_extra: {
            type: Sequelize.STRING(250)
        }
    }, { timestamps: false });

    return Participacao;
};