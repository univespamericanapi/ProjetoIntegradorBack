export const nota = (sequelize, Sequelize) => {
    const Nota = sequelize.define("notas", {
        nota_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nota_usuario: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nota_desfile: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nota_jurado: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nota_confec: {
            type: Sequelize.FLOAT
        },
        nota_fidel: {
            type: Sequelize.FLOAT
        }
    }, { timestamps: false });

    return Nota;
};