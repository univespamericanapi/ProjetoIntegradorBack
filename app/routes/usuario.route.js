import authJwt from "../middleware/authJwt.js";
import usuarioCtrl from "../controllers/usuario.ctrl.js";

const usuarioRoutes = app => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.get('/api/tudo', usuarioCtrl.allAccess);
    app.get('/api/user', [authJwt.verificaToken], usuarioCtrl.userBoard);
    app.get('/api/staff', [authJwt.verificaToken, authJwt.eStaff], usuarioCtrl.staffBoard);
    app.get('/api/admin', [authJwt.verificaToken, authJwt.eAdmin], usuarioCtrl.adminBoard);
};

export default usuarioRoutes;