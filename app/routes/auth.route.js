import verifySignUp from "../middleware/verifySignUp.js";
import controllerAuth from "../controllers/auth.controller.js";

const routesAuth = app => {
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
            verifySignUp.checkDuplicateUsername,
            verifySignUp.checkRolesExisted
        ],
        controllerAuth.signup
    );

    app.post(
        '/api/auth/signin',
        controllerAuth.signin
    );

    app.post(
        '/api/auth/refreshtoken',
        controllerAuth.refreshToken
    );
}

export default routesAuth;