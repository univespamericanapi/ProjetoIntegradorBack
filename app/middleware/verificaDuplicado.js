import db from "../models/db.model.js";

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
    checaDuplicadoDesfile
};

export default verificaDuplicado;