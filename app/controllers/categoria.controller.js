import db from "../models/db.model.js";

const Categoria = db.categoria;

export const controllerCategorias = async (req, res) => {
    Categoria.findAll().then(categorias => {
        let categoriaLista = [];

        categorias.forEach(categoria => {
            categoriaLista.push(categoria.categ_nome);
        });

        if (categoriaLista.length === 0) {
            return res.status(400).send({
                message: 'No category was found!'
            });
        }

        res.status(200).send({
            categoriaLista
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};