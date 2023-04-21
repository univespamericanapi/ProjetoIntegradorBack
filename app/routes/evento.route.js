import authJwt from "../middlewares/authJwt.js";
import eventoController from "../controllers/evento.controller.js";

const eventoRoutes = app => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.get('/api/evento/listar', eventoController.listar);
    app.get('/api/admin/evento/buscar/:idEvento', eventoController.buscarPorId);
    app.post('/api/admin/evento/criar', [
        authJwt.verificaToken,
        authJwt.eAdmin
    ], eventoController.criar);
    app.put('/api/admin/evento/atualizar/:idEvento', [
        authJwt.verificaToken,
        authJwt.eAdmin
    ], eventoController.atualizar);
    app.delete('/api/admin/evento/deletar/:idEvento', [
        authJwt.verificaToken,
        authJwt.eAdmin
    ], eventoController.deletar);
};

export default eventoRoutes;