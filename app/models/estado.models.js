export const estado = (sequelize, Sequelize) => {
    const Estado = sequelize.define("estados", {
        est_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        est_sigla: {
            type: Sequelize.STRING(2),
            allowNull: false
        },
        est_desc: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    });

    Estado.getIdByName = async estadoNome => {
        let id;
        await Estado.findOne({
            where: {
                est_desc: estadoNome
            }
        }).then(estado => {
            if (estado) {
                id = estado.est_id;
            }
        });
        return id;
    };

    return Estado;
};