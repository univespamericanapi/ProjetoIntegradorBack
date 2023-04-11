import db from "../models/db.model.js";

const atualizaConfig = async (req, res) => {
    const Config = db.config;
    const idConfig = req.params.idEvento;

    if (!idConfig) {
        res.status(400).send({ message: 'Nenhum parâmetro foi passado!' });
        return;
    }

    const alterConfig = await Config.findByPk(idConfig);

    if (!alterConfig) {
        return res.status(400).send({
            message: 'Nenhuma configuração foi encontrada!'
        });
    }

    await alterConfig.update(req.body).then(atualizado => {
        res.status(202).send({ message: `Evento atualizado com sucesso!` });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

const configLista = async (req, res) => {
    const Config = db.config;
    const Concurso = db.concurso;
    const idEvento = req.params.idEvento;

    await Config.findAll({
        where: {
            config_event: idEvento
        },
        attributes: {
            exclude: ['config_event', 'config_concurso']
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

const configCtrl = {
    atualizaConfig,
    configLista
};

export default configCtrl;