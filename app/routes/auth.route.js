import authController from "../controllers/auth.controller.js";

const authRoutes = app => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.post(
        '/api/auth/login',
        authController.login
    );

    app.post(
        '/api/auth/refreshtoken',
        authController.refreshToken
    );
}

export default authRoutes;