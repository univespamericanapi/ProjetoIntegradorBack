// {
//     nota_id,
//     nota_usuario,
//     nota_desfile,
//     nota_jurado,
//     nota_confec,
//     nota_fidel
// }

import db from "../models/db.model.js";

const inserirNota = async (req, res) => {
    const Nota = db.nota;

    await Nota.findOrCreate({
        where: {
            nota_desfile: req.body.nota_desfile,
            nota_jurado: req.body.nota_jurado,
        },
        defaults: req.body
    }).then(async ([nota, notaCriado]) => {
        if (!notaCriado) {
            nota.update(req.body);
        }
        res.status(202).send({ message: `Notas registradas com sucesso!` });
    });
};

const notaCtrl = {
    inserirNota
};

export default notaCtrl;