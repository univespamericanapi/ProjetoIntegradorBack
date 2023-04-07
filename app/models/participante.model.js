export const participante = (sequelize, Sequelize) => {
    const Participante = sequelize.define("participantes", {
        part_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        part_user: {
            type: Sequelize.STRING(255),
            allowNull: true
        },
        part_senha: {
            type: Sequelize.STRING(255),
            allowNull: true
        },
        part_nome: {
            type: Sequelize.STRING(500),
            allowNull: false
        },
        part_nomeSocial: {
            type: Sequelize.STRING(500),
            allowNull: false
        },
        part_cpf: {
            type: Sequelize.STRING(11),
            allowNull: false
        },
        part_nasc: {
            type: Sequelize.DATE,
            allowNull: false
        },
        part_cel: {
            type: Sequelize.STRING(11),
            allowNull: false
        },
        part_est: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        part_cidade: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    return Participante;
};