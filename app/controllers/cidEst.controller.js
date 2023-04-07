import db from "../models/db.model.js";

const Cidades = db.cidades;
const Estados = db.estados;

const cidades = async (req, res) => {
    await Estados.findOne({
        where: {
            est_desc: req.body.estado
        }
    }).then(estado => {
        Cidades.findAll({
            where: {
                cid_estado: estado.est_id
            }
        }).then(cidades => {
            let cidadeLista = [];

            cidades.forEach(cidade => {
                cidadeLista.push(cidade.cid_desc);
            });

            if (cidadeLista.length === 0) {
                return res.status(400).send({
                    message: 'No city was found!'
                });
            }

            res.status(200).send({
                cidadeLista
            });
        }).catch(err => {
            res.status(500).send({ message: err.message });
        });
    });
};

const estados = async (req, res) => {
    Estados.findAll().then(estados => {
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

const controllerCidEst = {
    cidades: cidades,
    estados: estados
};

export default controllerCidEst;