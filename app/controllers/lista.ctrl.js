import db from "../models/db.model.js";

const cidade = async (req, res) => {
    const Cidade = db.cidade;
    const Estado = db.estado;

    if (!req.body.cid_estado) {
        res.status(400).send({ message: 'Nenhum estado foi fornecido!' });
        return;
    }

    await Cidade.findAll({
        where: {
            cid_estado: req.body.cid_estado
        },
        attributes: ['cid_id', 'cid_desc'],
        include: {
            model: Estado,
            attributes: ['est_sigla', 'est_desc']
        },
        order: [
            ['cid_desc', 'ASC']
        ]
    }).then(cidades => {
        let cidadeLista = [];

        cidades.forEach(cidade => {
            cidadeLista.push(cidade);
        });

        res.status(200).send({
            cidadeLista
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

const estado = async (req, res) => {
    const Estado = db.estado;

    await Estado.findAll().then(estados => {
        let estadoLista = [];

        estados.forEach(estado => {
            estadoLista.push(estado);
        });

        if (estadoLista.length === 0) {
            return res.status(400).send({
                message: 'Nenhuma cidade foi encontrada!'
            });
        }

        res.status(200).send({
            estadoLista
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

const categoria = async (req, res) => {
    const Categoria = db.categoria;

    await Categoria.findAll().then(categorias => {
        let categoriaLista = [];

        categorias.forEach(categoria => {
            categoriaLista.push(categoria);
        });

        if (categoriaLista.length === 0) {
            return res.status(400).send({
                message: 'Nenhuma categoria foi encontrada!'
            });
        }

        res.status(200).send({
            categoriaLista
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

const listaCtrl = {
    cidade,
    estado,
    categoria
};

export default listaCtrl;