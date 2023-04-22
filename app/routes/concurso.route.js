import concursoController from "../controllers/concurso.controller.js";
import authJwt from "../middlewares/authJwt.js";

const concursoRoutes = app => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.get('/api/admin/concurso/buscar/:idEvento', [
        authJwt.verificaToken,
        authJwt.eAdmin
    ], concursoController.listarPorEvento);
    app.put('/api/admin/concurso/atualizar/:idConcurso', [
        authJwt.verificaToken,
        authJwt.eAdmin
    ], concursoController.atualizar);
};

export default concursoRoutes;