import db from "../models/db.model.js";

const cidades = async (req, res) => {
    const Cidades = db.cidades;
    const Estados = db.estados;

    await Estados.findOne({
        where: {
            est_desc: req.body.estado
        }
    }).then(estado => {
        if (!estado) {
            return res.status(400).send({
                message: 'No city was found!'
            });
        }

        Cidades.findAll({
            where: {
                cid_estado: estado.est_id
            }
        }).then(cidades => {
            let cidadeLista = [];

            cidades.forEach(cidade => {
                cidadeLista.push(cidade.cid_desc);
            });

            res.status(200).send({
                cidadeLista
            });
        }).catch(err => {
            res.status(500).send({ message: err.message });
        });
    });
};

const estados = async (req, res) => {
    const Estados = db.estados;

    await Estados.findAll().then(estados => {
        let estadoLista = [];

        estados.forEach(estado => {
            estadoLista.push(estado.est_desc);
        });

        if (estadoLista.length === 0) {
            return res.status(400).send({
                message: 'No city was found!'
            });
        }

        res.status(200).send({
            estadoLista
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

const categorias = async (req, res) => {
    const Categoria = db.categoria;

    await Categoria.findAll().then(categorias => {
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

const controllerCadastro = {
    cidades,
    estados,
    categorias
};

export default controllerCadastro;