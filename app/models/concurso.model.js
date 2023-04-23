export const concurso = (sequelize, Sequelize) => {
    const Concurso = sequelize.define("concursos", {
        conc_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        conc_event: { // FK para tabela evento
            type: Sequelize.INTEGER,
            allowNull: false
        },
        conc_nome: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        conc_limit_inscr: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        conc_atual_inscr: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        conc_limit_espera: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        conc_atual_espera: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        conc_limit_checkin: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        conc_atual_checkin: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        conc_ativo: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        },
        conc_data_ativ: {
            type: Sequelize.DATEONLY,
            allowNull: false
        }
    }, { timestamps: false });

    return Concurso;
};