import authJwt from "../middleware/authJwt.js";
import controllerEvento from "../controllers/evento.controller.js";
import verifyDuplicate from "../middleware/verifyDuplicate.js";

const routesEvento = app => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.post('/api/admin/novoevento', [
        authJwt.verifyToken,
        authJwt.isAdmin,
        verifyDuplicate.checkDuplicateEvento
    ], controllerEvento.novoEvento);
    app.get('/api/user/eventos', controllerEvento.eventoList);
};

export default routesEvento;