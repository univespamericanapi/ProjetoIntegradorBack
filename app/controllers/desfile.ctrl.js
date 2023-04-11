import db from "../models/db.model.js";
import utils from "../middleware/utils.js";

const novoDesfile = async (req, res) => {
    const Desfile = db.desfile;
    const Participante = db.participante;
    const Personagem = db.personagem;
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

    const configs = await verificaLimite(Desfile, desfDados.desf_event);

    if (configs.fim) {
        res.status(400).send({ message: configs.mensagem });
        return;
    }

    if (!configs.ativo) {
        res.status(400).send({ message: configs.mensagem });
        return;
    }

    desfDados.desf_ordem = configs.total + 1;

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
                        if (configs.espera) {
                            res.status(201).send({ message: configs.mensagem });
                            return;
                        }

                        res.status(201).send({ message: 'Cadastro concluído com sucesso!' });
                    });
                });
            });
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    };
};

const verificaLimite = async (Desfile, idEvento) => {
    const Config = db.config;
    const Concurso = db.concurso;
    const retorno = {
        ativo: true,
        espera: false,
        fim: false,
        mensagem: "",
        total: 0
    };

    const contagem = await Desfile.count({
        where: {
            desf_event: idEvento
        }
    });

    retorno.total = contagem;

    const concurso = await Concurso.findOne({
        where: {
            concur_nome: "Desfile Cosplay"
        }
    });

    const configs = await Config.findOne({
        where: {
            config_event: idEvento,
            config_concurso: concurso.concur_id
        }
    });

    if (!configs.config_ativo) {
        retorno.ativo = configs.config_ativo;
        retorno.mensagem = "Evento inativo, aguarde até abrir as inscrições!";
    }

    if (contagem >= configs.config_limit_inscr) {
        retorno.espera = true;
        retorno.mensagem = "As vagas para o concurso acabaram, sua inscrição foi registrada na fila de espera!";
    }

    if (contagem >= (configs.config_limit_inscr +
        configs.config_limit_espera)) {
        retorno.fim = true;
        retorno.mensagem = "Não há mais vagas para inscrição!";
    }

    return retorno;
};

const desfileCtrl = {
    novoDesfile
};

export default desfileCtrl;