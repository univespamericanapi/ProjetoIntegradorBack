import db from "../models/db.model.js";

const checaDuplicadoEvento = async (req, res, next) => {
    const Evento = db.evento;
    const eventEdiNome = `${req.body.event_edicao}º ${req.body.event_nome}`;

    await Evento.findOne({
        where: {
            event_EdiNome: eventEdiNome
        }
    }).then(evento => {
        if (evento) {
            res.status(400).send({
                message: 'Evento já cadastrado!'
            });
            return;
        }
        next();
    });
};

const checaDuplicadoDesfile = async (req, res, next) => {
    const Participante = db.participante;
    const Personagem = db.personagem;
    const Desfile = db.desfile;
    let duplicado = false;


    const part = await Participante.findOne({
        where: {
            part_cpf: req.body.part_cpf
        }
    });

    let pers;
    if (part) {
        pers = await Personagem.findAll({
            where: {
                pers_part: part.part_id
            }
        });
    }

    if (pers) {
        for (let elemento of pers) {
            await Desfile.findOne({
                where: {
                    desf_pers: elemento.pers_id,
                    desf_event: req.body.desf_event
                }
            }).then(desf => {
                if (desf) {
                    duplicado = true;
                }
            });
            if (duplicado) {
                break;
            }
        }
    }

    if (duplicado) {
        res.status(400).send({
            message: `Participante já foi cadastrado no desfile cosplay!`
        });
        return;
    }

    next();
};



const verificaDuplicado = {
    checaDuplicadoEvento,
    checaDuplicadoDesfile
};

export default verificaDuplicado;