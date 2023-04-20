import authJwt from "../middlewares/authJwt.js";
import configCtrl from "../controllers/config_concurso.ctrl.js";

const configRoutes = app => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.put('/api/admin/config/update/:idEvento', [
        authJwt.verificaToken,
        authJwt.eAdmin
    ], configCtrl.atualizaConfig);
    app.get('/api/lista/config/:idEvento', configCtrl.configLista);
};

export default configRoutes;