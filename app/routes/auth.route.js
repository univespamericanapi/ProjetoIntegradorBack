import verificaSignUp from "../middleware/verificaSignUp.js";
import authCtrl from "../controllers/auth.ctrl.js";
import authJwt from "../middleware/authJwt.js";
import criaUsuarioController from "../controllers/criaUsuario.controller.js";

const authRoutes = app => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.post(
        '/api/auth/admin/criaUsuario',
        [
            authJwt.verificaToken,
            authJwt.eAdmin
        ],
        criaUsuarioController
    );

    app.post(
        '/api/auth/signin',
        authCtrl.signin
    );

    app.post(
        '/api/auth/refreshtoken',
        authCtrl.refreshToken
    );
}

export default authRoutes;