export const cidades = (sequelize, Sequelize) => {
    const Cidades = sequelize.define("cidades", {
        cid_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cid_desc: {
            type: Sequelize.STRING(250),
            allowNull: false
        },
        cid_estado: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });

    Cidades.getIdByName = async (idEstado, cidadeNome) => {
        let id;
        await Cidades.findOne({
            where: {
                cid_desc: cidadeNome,
                cid_estado: idEstado
            }
        }).then(cidade => {
            if (cidade) {
                id = cidade.cid_id;
            }
        });
        return id;
    };

    return Cidades;
};