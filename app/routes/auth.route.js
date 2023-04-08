import verificaSignUp from "../middleware/verificaSignUp.js";
import authCtrl from "../controllers/auth.ctrl.js";

const authRoutes = app => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.post(
        '/api/auth/signup',
        [
            verificaSignUp.checaDuplicadoLogin,
            verificaSignUp.checaCargoExiste
        ],
        authCtrl.signup
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