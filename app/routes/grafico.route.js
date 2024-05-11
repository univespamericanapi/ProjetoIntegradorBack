import graficoController from "../controllers/grafico.controller.js";
import authJwt from "../middlewares/authJwt.js";

const graficoRoutes = (app) => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.get(
        '/api/admin/grafico/cidade/:idEvento',
        [authJwt.verificaToken, authJwt.eAdmin],
        graficoController.competidorPorCidade
    );

    app.get(
        '/api/admin/grafico/concurso/:idEvento',
        [authJwt.verificaToken, authJwt.eAdmin],
        graficoController.competidorPorConcurso
    );

    app.get(
        '/api/admin/grafico/faixas-etarias/:idEvento',
        [authJwt.verificaToken, authJwt.eAdmin],
        graficoController.faixasEtarias
    );

    app.get(
        '/api/admin/grafico/temas/:idConc',
        [authJwt.verificaToken, authJwt.eAdmin],
        graficoController.temas
    );
};

export default graficoRoutes;