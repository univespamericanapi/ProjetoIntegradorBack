import db from "../models/db.model.js";

const cidade = async (req, res) => {
    const Cidade = db.cidade;
    const Estado = db.estado;

    const estadoId = await Estado.getIdByName(req.body.estado);

    if (!estadoId) {
        return res.status(400).send({
            message: 'Nenhum estado foi encontrado!'
        });
    }

    await Cidade.findAll({
        where: {
            cid_estado: estadoId
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
};

const estado = async (req, res) => {
    const Estado = db.estado;

    await Estado.findAll().then(estados => {
        let estadoLista = [];

        estados.forEach(estado => {
            estadoLista.push(estado.est_desc);
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
            categoriaLista.push(categoria.categ_nome);
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