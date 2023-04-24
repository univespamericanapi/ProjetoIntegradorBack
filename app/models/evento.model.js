import { concursosConstant } from "../constants/listas.constant.js";

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
        event_cidade: { // FK para tabela cidade
            type: Sequelize.INTEGER,
            allowNull: false
        },
        event_data: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        event_ed_nome: {
            type: Sequelize.STRING(255),
            allowNull: false
        }
    }, {
        timestamps: false,
        hooks: {
            beforeDestroy: (eventos) => {
                sequelize.models.concursos.destroy({
                    where: {
                        conc_event: eventos.event_id
                    }
                });
            },
            afterCreate: (eventos) => {
                concursosConstant.forEach(concurso => {
                    sequelize.models.concursos.create({
                        conc_event: eventos.event_id,
                        conc_nome: concurso,
                        conc_limit_inscr: 0,
                        conc_atual_inscr: 0,
                        conc_limit_espera: 0,
                        conc_atual_espera: 0,
                        conc_limit_checkin: 0,
                        conc_atual_checkin: 0,
                        conc_ativo: false,
                        conc_data_ativ: "1900-01-01"
                    });
                });
            }
        }
    });

    return Evento;
};