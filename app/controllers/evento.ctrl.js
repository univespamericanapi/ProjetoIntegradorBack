import db from "../models/db.model.js";

const novoEvento = async (req, res) => {
    const Evento = db.evento;
    const novo = req.body;

    if (!novo.event_estado) {
        res.status(400).send({ message: 'Nenhum estado fornecido!' });
    }

    if (!novo.event_cidade) {
        res.status(400).send({ message: 'Nenhuma cidade fornecida!' });
    }

    novo.event_data = db.dataConverter(novo.event_data);
    novo.event_EdiNome = `${novo.event_edicao}º ${novo.event_nome}`;

    await Evento.create(novo).then(() => {
        res.status(201).send({ message: 'Novo evento criado com sucesso!' });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

const atualizaEvento = async (req, res) => {
    const Evento = db.evento;
    const idEvento = req.params.id;
    const alteracoes = req.body;

    if (!idEvento) {
        res.status(400).send({ message: 'Nenhum parâmetro foi passado!' });
        return;
    }

    if (alteracoes.event_data) {
        alteracoes.event_data = db.dataConverter(alteracoes.event_data);
    }

    if (alteracoes.event_nome || alteracoes.event_edicao) {
        alteracoes.event_EdiNome = `${alteracoes.event_edicao}º ${alteracoes.event_nome}`;
    }

    const alterEvento = await Evento.findByPk(idEvento);

    await alterEvento.update(req.body).then(atualizado => {
        res.status(202).send({ message: `Evento atualizado com sucesso!` });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

const deletaEvento = async (req, res) => {
    const Evento = db.evento;
    const idEvento = req.params.id;

    if (!idEvento) {
        res.status(400).send({ message: 'Nenhum parâmetro foi passado!' });
        return;
    }

    await Evento.destroy({
        where: {
            event_id: idEvento
        }
    }).then(evento => {
        res.status(202).send({ message: `Evento deletado com sucesso!` });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

const eventoLista = async (req, res) => {
    const Evento = db.evento;
    const Estado = db.estado;
    const Cidade = db.cidade;

    await Evento.findAll({
        attributes: {
            exclude: ['event_estado', 'event_cidade']
        },
        include: {
            model: Cidade,
            attributes: ['cid_desc'],
            include: {
                model: Estado,
                attributes: ['est_sigla', 'est_desc']
            }
        },
        order: [
            ['event_data', 'DESC']
        ]
    }).then(eventos => {
        let eventoLista = [];

        eventos.forEach(evento => {
            eventoLista.push(evento);
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

const eventoCtrl = {
    novoEvento,
    atualizaEvento,
    deletaEvento,
    eventoLista
};

export default eventoCtrl;