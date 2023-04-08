export const evento = (sequelize, Sequelize) => {
    const Evento = sequelize.define("eventos", {
        event_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        event_nome: {
            type: Sequelize.STRING(250),
            allowNull: false
        },
        event_local: {
            type: Sequelize.STRING(250),
            allowNull: false
        },
        event_edicao: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        event_estado: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        event_cidade: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        event_data: {
            type: Sequelize.DATE,
            allowNull: false
        },
        event_EdiNome: {
            type: Sequelize.STRING(255),
            allowNull: false
        }
    }, { timestamps: false });

    return Evento;
};