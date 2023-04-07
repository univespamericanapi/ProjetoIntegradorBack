export const user = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        idUser: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        password: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        name: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        roleId: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    return User;
};