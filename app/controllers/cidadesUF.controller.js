import db from "../models/db.model.js";

const Cidades = db.cidades;

const cidades = async (req, res) => {
    await Cidades.findAll({
        where: {
            estado: req.body.estado
        }
    }).then(estado => {
        let cidades = [];

        estado.forEach(cidade => {
            cidades.push(cidade.cidade);
        });

        if (cidades.length === 0) {
            return res.status(400).send({
                message: 'No city was found!'
            });
        }

        res.status(200).send({
            cidades
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

const estados = async (req, res) => {
    const estados = [
        'Rondônia',
        'Acre',
        'Amazonas',
        'Roraima',
        'Pará',
        'Amapá',
        'Tocantins',
        'Maranhão',
        'Piauí',
        'Ceará',
        'Rio Grande do Norte',
        'Paraíba',
        'Pernambuco',
        'Alagoas',
        'Sergipe',
        'Bahia',
        'Minas Gerais',
        'Espírito Santo',
        'Rio de Janeiro',
        'São Paulo',
        'Paraná',
        'Santa Catarina',
        'Rio Grande do Sul',
        'Mato Grosso do Sul',
        'Mato Grosso',
        'Goiás',
        'Distrito Federal'
    ]

    res.status(200).send({
        estados
    });

};

const controllerCidadesUF = {
    cidades: cidades,
    estados: estados
};

export default controllerCidadesUF;