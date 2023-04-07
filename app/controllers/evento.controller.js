// {
//     nomeEvento,
//     local,
//     edicao,
//     estado,
//     cidade,
//     data
// }

import db from "../models/db.model.js";

const novoEvento = async (req, res) => {
    const Evento = db.evento;
    const Estados = db.estados;
    const Cidades = db.cidades;

    const idEstado = await Estados.getIdByName(req.body.estado);
    if (!idEstado) {
        res.status(400).send({ message: 'Nenhum estado encontrado!' });
    }

    const idCidade = await Cidades.getIdByName(idEstado, req.body.cidade);
    if (!idCidade) {
        res.status(400).send({ message: 'Nenhuma cidade encontrada!' });
    }

    const data = db.dataConverter(req.body.data);
    const eventEdiNome = `${req.body.edicao}º ${req.body.nomeEvento}`;

    await Evento.create({
        event_nome: req.body.nomeEvento,
        event_local: req.body.local,
        event_edicao: req.body.edicao,
        event_estado: idEstado,
        event_cidade: idCidade,
        event_data: data,
        event_EdiNome: eventEdiNome
    }).then(() => {
        res.send({ message: 'Novo evento criado com sucesso!' });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

const eventoList = async (req, res) => {
    const Evento = db.evento;

    await Evento.findAll().then(eventos => {
        let eventoLista = [];

        eventos.forEach(evento => {
            eventoLista.push(evento.event_EdiNome);
        });

        if (eventoLista.length === 0) {
            return res.status(400).send({
                message: 'Nenhum evento encontrado!'
            });
        }

        res.status(200).send({
            eventoLista
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

const controllerEvento = {
    novoEvento,
    eventoList
};

export default controllerEvento;