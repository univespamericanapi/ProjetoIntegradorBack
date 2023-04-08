export const categoria = (sequelize, Sequelize) => {
    const Categoria = sequelize.define("categorias", {
        categ_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        categ_nome: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    });

    Categoria.getIdByName = async categoriaNome => {
        await Categoria.findOne({
            where: {
                categ_nome: categoriaNome
            }
        }).then(categoria => {
            return categoria.categ_id;
        }).catch(err => {
            res.status(500).send({ message: err.message });
        });
    };

    return Categoria;
};