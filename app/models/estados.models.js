export const estados = (sequelize, Sequelize) => {
    const Estados = sequelize.define("estados", {
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

    Estados.getIdByName = async estadoNome => {
        let id;
        await Estados.findOne({
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

    return Estados;
};