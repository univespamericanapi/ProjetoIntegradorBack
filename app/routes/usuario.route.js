import authJwt from "../middlewares/authJwt.js";
import usuarioController from "../controllers/usuario.controller.js";

const usuarioRoutes = app => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.post(
        '/api/admin/usuario/criar',
        [
            authJwt.verificaToken,
            authJwt.eAdmin
        ],
        usuarioController.criar
    );
}

export default usuarioRoutes;