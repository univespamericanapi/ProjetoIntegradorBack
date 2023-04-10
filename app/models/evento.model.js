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
    }, {
        timestamps: false,
        hooks: {
            beforeDestroy: (eventos) => {
                sequelize.models.configs_concursos.destroy({
                    where: {
                        config_event: eventos.event_id
                    }
                });
            },
            afterCreate: (eventos) => {
                sequelize.models.concursos.findAll().then(concursoLista => {
                    concursoLista.forEach(concurso => {
                        sequelize.models.configs_concursos.create({
                            config_event: eventos.event_id,
                            config_concurso: concurso.concur_id,
                            config_min_inscr: 3,
                            config_limit_inscr: 0,
                            config_limit_espera: 0,
                            config_min_checkin: 3,
                            config_limit_checkin: 0,
                            config_ativo: false
                        });
                    });
                });
            }
        }
    });

    return Evento;
};