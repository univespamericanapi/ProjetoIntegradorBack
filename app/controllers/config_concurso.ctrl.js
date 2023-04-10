import db from "../models/db.model.js";

const atualizaConfig = async (req, res) => {
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

    if (!alterEvento) {
        return res.status(400).send({
            message: 'Nenhum evento encontrado!'
        });
    }

    await alterEvento.update(req.body).then(atualizado => {
        res.status(202).send({ message: `Evento atualizado com sucesso!` });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

const configLista = async (req, res) => {
    const Config = db.config;
    const Evento = db.evento;
    const Concurso = db.concurso;
    const idEvento = req.params.id;

    await Config.findAll({
        where: {
            config_event: idEvento
        },
        include: {
            model: Concurso,
            attributes: ['concur_nome'],
        }
    }).then(configs => {
        let configLista = [];

        configs.forEach(config => {
            configLista.push(config);
        });

        if (configLista.length === 0) {
            return res.status(400).send({
                message: 'Nenhuma configuração foi encontrada para esse evento!'
            });
        }

        res.status(200).send({
            configLista
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

const eventoPorId = async (req, res) => {
    const Evento = db.evento;
    const Estado = db.estado;
    const Cidade = db.cidade;
    const idEvento = req.params.id;

    await Evento.findByPk(idEvento, {
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
    }).then(evento => {
        if (!evento) {
            return res.status(400).send({
                message: 'Nenhum evento encontrado!'
            });
        }

        res.status(200).send({
            evento
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

const configCtrl = {
    atualizaConfig,
    configLista
};

export default configCtrl;