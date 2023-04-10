import authJwt from "../middleware/authJwt.js";
import eventoCtrl from "../controllers/evento.ctrl.js";
import verificaDuplicado from "../middleware/verificaDuplicado.js";

const eventoRoutes = app => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.post('/api/admin/evento/create', [
        authJwt.verificaToken,
        authJwt.eAdmin,
        verificaDuplicado.checaDuplicadoEvento
    ], eventoCtrl.novoEvento);
    app.put('/api/admin/evento/update/:id', [
        authJwt.verificaToken,
        authJwt.eAdmin
    ], eventoCtrl.atualizaEvento);
    app.delete('/api/admin/evento/delete/:id', [
        authJwt.verificaToken,
        authJwt.eAdmin
    ], eventoCtrl.deletaEvento);
    app.get('/api/lista/evento', eventoCtrl.eventoLista);
    app.get('/api/lista/evento/:id', eventoCtrl.eventoPorId);
};

export default eventoRoutes;