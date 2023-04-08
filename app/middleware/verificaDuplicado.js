import db from "../models/db.model.js";

const checaDuplicadoEvento = async (req, res, next) => {
    const Evento = db.evento;
    const eventEdiNome = `${req.body.edicao}º ${req.body.nomeEvento}`;

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

const verificaDuplicado = {
    checaDuplicadoEvento
};

export default verificaDuplicado;