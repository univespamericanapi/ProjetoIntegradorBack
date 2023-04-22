import db from "../models/db.model.js";

const novoDesfile = async (req, res) => {
    const Evento = db.evento;

    const desfDados = {};
    const partDados = {};
    const persDados = {};

    desfDados.desf_event = req.body.desf_event;

    if (!desfDados.desf_event) {
        res.status(400).send({ message: 'Não foram enviadas todas as informações!' });
        return;
    }

    const evento = await Evento.findByPk(desfDados.desf_event);

    if (!evento) {
        res.status(400).send({ message: 'Evento não encontrado!' });
        return;
    }

    partDados.part_nome = req.body.part_nome;
    partDados.part_nomeSocial = req.body.part_nomeSocial;
    partDados.part_cpf = req.body.part_cpf;
    partDados.part_nasc = utils.dataConverter(req.body.part_nasc);
    partDados.part_whats = req.body.part_whats;
    partDados.part_est = req.body.part_est;
    partDados.part_cidade = req.body.part_cidade;

    if (!partDados.part_nomeSocial) {
        partDados.part_nomeSocial = partDados.part_nome;
    }

    if (!utils.validaCpf(partDados.part_cpf)) {
        res.status(400).send({ message: 'CPF inválido!' });
        return;
    }

    persDados.pers_aceite = req.body.pers_aceite;
    persDados.pers_nome = req.body.pers_nome;
    persDados.pers_origem = req.body.pers_origem;
    persDados.pers_link = req.body.pers_link;

    desfDados.desf_categ = req.body.desf_categ;
    desfDados.desf_extra = req.body.desf_extra;
    desfDados.desf_conf = false;

    const configsVerifica = await verificaConfigs(desfDados.desf_event);

    if (configsVerifica.status === 400) {
        res.status(configsVerifica.status).send({
            message: configsVerifica.message
        });
        return;
    }

    desfDados.desf_ordem = configsVerifica.total + 1;

    let gravado = await criarDados(partDados, persDados, desfDados);

    if (configsVerifica.status === 201) {
        gravado.status = configsVerifica.status;
        gravado.message = configsVerifica.message;
    }

    res.status(gravado.status).send({ message: gravado.message });
};

const desfileLista = async (req, res) => {
    const idEvento = req.params.idEvento;

    if (!idEvento) {
        res.status(400).send({ message: 'Não foram enviadas todas as informações!' });
        return;
    }

    const configs = await getConfigs(idEvento);

    if (!configs) {
        res.status(400).send({ message: 'Evento não encontrado!' });
        return;
    }

    let pula = 0;
    let quant = configs.config_limit_inscr;

    const listaInscri = await criarLista(idEvento, pula, quant);

    if (listaInscri.status === 400) {
        res.status(listaInscri.status).send({ message: listaInscri.message });
        return;
    }

    pula = configs.config_limit_inscr;
    quant = configs.config_limit_espera;

    const listaEspera = await criarLista(idEvento, pula, quant);

    res.status(200).send({
        listaInscri: listaInscri.lista,
        listaEspera: listaEspera.lista,
    });
};

const desfileCheckin = async (req, res) => {
    const idDesfile = req.params.id;

    if (!idDesfile) {
        res.status(400).send({ message: 'Nenhum parâmetro foi passado!' });
        return;
    }

    const Desfile = db.desfile;

    const alterDesfile = await Desfile.findByPk(idDesfile);

    const contagem = await Desfile.count({
        where: {
            desf_conf: true
        }
    });

    console.log(contagem);

    const configs = await getConfigs(alterDesfile.desf_event);

    if (contagem >= configs.config_limit_checkin &&
        !alterDesfile.desf_conf) {
        return res.status(400).send({
            message: 'Limite de participantes no concurso alcançado!'
        });
    }

    if (!alterDesfile) {
        return res.status(400).send({
            message: 'Nenhum concurso encontrado!'
        });
    }

    await alterDesfile.update({
        desf_conf: !alterDesfile.desf_conf
    }).then(atualizado => {
        if (atualizado.desf_conf) {
            res.status(202).send({ message: `Checkin efetuado com sucesso!` });
        } else {
            res.status(202).send({ message: `Checkin desfeito com sucesso!` });
        }
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

const desfileResultado = async (req, res) => {
    const Desfile = db.desfile;
    const Personagem = db.personagem;
    const Participante = db.participante;

    const idEvento = req.params.idEvento;

    if (!idEvento) {
        res.status(400).send({ message: 'Nenhum parâmetro foi passado!' });
        return;
    }

    await Desfile.findAll({
        where: {
            desf_event: idEvento,
            desf_conf: true
        },
        attributes: ['desf_id', 'desf_conf', 'desf_media'],
        include: [{
            model: Personagem,
            attributes: ['pers_nome', 'pers_origem'],
            include: {
                model: Participante,
                attributes: ['part_nome', 'part_nomeSocial'],
            }
        }],
        limit: 3,
        order: [
            ['desf_media', 'DESC']
        ]
    }).then(async desfiles => {
        const listaResultado = [];

        for (let desfile of desfiles) {
            await calculaMedia(desfile);
            listaResultado.push(desfile);
        }

        res.status(200).send(listaResultado);
    });
};

const verificaConfigs = async idEvento => {
    const Desfile = db.desfile;

    const retorno = {
        status: 200,
        message: '',
        total: 0
    };

    const contagem = await Desfile.count({
        where: {
            desf_event: idEvento
        }
    });

    retorno.total = contagem;

    const configs = await getConfigs(idEvento);
    const maximo = configs.config_limit_inscr + configs.config_limit_espera;

    if (!configs.config_ativo) {
        retorno.status = 400;
        retorno.message = 'Evento inativo, aguarde até abrir as inscrições!';
        return retorno;
    }

    if (contagem >= maximo) {
        retorno.status = 400;
        retorno.message = 'Não há mais vagas para inscrição!';
        return retorno;
    }

    if (contagem >= configs.config_limit_inscr) {
        retorno.status = 201;
        retorno.message = 'As vagas para o concurso acabaram, sua inscrição foi registrada na fila de espera!';
        return retorno;
    }



    return retorno;
};

const getConfigs = async idEvento => {
    const Config = db.config;
    const Concurso = db.concurso;

    let retorno = {};

    const concurso = await Concurso.findOne({
        where: {
            concur_nome: "Desfile Cosplay"
        }
    });

    await Config.findOne({
        where: {
            config_event: idEvento,
            config_concurso: concurso.concur_id
        }
    }).then(config => {
        retorno = config;
    });

    return retorno;
};

const criarDados = async (partDados, persDados, desfDados) => {
    const Desfile = db.desfile;
    const Participante = db.participante;
    const Personagem = db.personagem;
    const retorno = {};

    try {
        await db.sequelize.transaction(async (transaction) => {
            await Participante.findOrCreate({
                where: {
                    part_cpf: partDados.part_cpf
                },
                defaults: partDados,
                transaction
            }).then(async ([participante, partCriado]) => {
                persDados.pers_part = participante.part_id;
                await Personagem.findOrCreate({
                    where: {
                        pers_part: persDados.pers_part,
                        pers_nome: persDados.pers_nome
                    },
                    defaults: persDados,
                    transaction
                }).then(async ([personagem, persCriado]) => {
                    desfDados.desf_pers = personagem.pers_id;
                    await Desfile.findOrCreate({
                        where: {
                            desf_event: desfDados.desf_event,
                            desf_pers: desfDados.desf_pers
                        },
                        defaults: desfDados,
                        transaction
                    }).then(async ([desfile, desfCriado]) => {
                        retorno.status = 201;
                        retorno.message = 'Cadastro concluído com sucesso!';
                    });
                });
            });
        });
    } catch (error) {
        retorno.status = 500;
        retorno.message = error.message;
        return retorno;
    };

    return retorno;
};

const criarLista = async (idEvento, pula, quant) => {
    const Desfile = db.desfile;
    const Evento = db.evento;
    const Personagem = db.personagem;
    const Participante = db.participante;
    const Cidade = db.cidade;
    const Estado = db.estado;
    const Categoria = db.categoria;

    const retorno = {
        lista: [],
        status: 200,
        message: ''
    }

    await Desfile.findAll({
        where: {
            desf_event: idEvento
        },
        attributes: {
            exclude: ['desf_event', 'desf_pers', 'desf_categ', 'desf_media']
        },
        include: [{
            model: Evento,
            attributes: ['event_EdiNome']
        }, {
            model: Personagem,
            attributes: {
                exclude: ['pers_id', 'pers_part', 'pers_aceite']
            },
            include: {
                model: Participante,
                attributes: {
                    exclude: ['part_id', 'part_user', 'part_senha', 'part_est', 'part_cidade']
                },
                include: {
                    model: Cidade,
                    attributes: ['cid_desc'],
                    include: {
                        model: Estado,
                        attributes: ['est_desc']
                    }
                },
            }
        }, {
            model: Categoria,
            attributes: ['categ_nome']
        }],
        offset: pula,
        limit: quant,
        order: [
            ['desf_ordem', 'ASC']
        ]
    }).then(desfiles => {
        const desfileLista = [];

        desfiles.forEach(desfile => {
            desfileLista.push(desfile);
        });

        if (!retorno.lista.length === 0) {
            console.log(retorno.lista);
            retorno.status = 400;
            retorno.message = 'Nenhum competidor foi encontrado!';
            return retorno;
        }

        retorno.lista = desfileLista;
    });
    return retorno;
};

const calculaMedia = async (desfile) => {
    const Nota = db.nota;

    await Nota.findAll({
        where: {
            nota_desfile: desfile.desf_id
        }
    }).then(notas => {
        let somaConfec = 0;
        let somaFidel = 0;

        notas.forEach(nota => {
            somaConfec += nota.nota_confec;
            somaFidel += nota.nota_fidel
        });

        let media = (somaConfec + somaFidel) / 6;

        desfile.update({
            desf_media: media.toFixed(1)
        });
    });
};

const desfileCtrl = {
    novoDesfile,
    desfileLista,
    desfileCheckin,
    desfileResultado
};

export default desfileCtrl;