export const role = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
        idRole: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(255),
            allowNull: false
        }
    });

    return Role;
};