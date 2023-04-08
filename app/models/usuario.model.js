export const usuario = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuarios", {
        usuario_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        usuario_login: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        usuario_senha: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        usuario_nome: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        usuario_cargo: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, { timestamps: false });

    return Usuario;
};