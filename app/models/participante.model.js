export const participante = (sequelize, Sequelize) => {
    const Participante = sequelize.define("participantes", {
        idParticipante: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        usuario: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        senha: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        nome: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        sobrenome: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        nome_social: {
            type: Sequelize.STRING(255)
        },
        cpf: {
            type: Sequelize.STRING(11),
            allowNull: false
        },
        dt_nascimento: {
            type: Sequelize.DATE,
            allowNull: false
        },
        celular: {
            type: Sequelize.STRING(11),
            allowNull: false
        },
        cidade: {
            type: Sequelize.STRING(255)
        },
        estado: {
            type: Sequelize.STRING(2)
        }
    });

    return Participante;
};