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

    app.get(
        '/api/admin/usuario/listar',
        [
            authJwt.verificaToken,
            authJwt.eAdmin
        ],
        usuarioController.listar
    );

    app.delete(
        '/api/admin/usuario/deletar/:idUsuario',
        [
            authJwt.verificaToken,
            authJwt.eAdmin
        ],
        usuarioController.deletar
    );

    app.put(
        '/api/usuario/alterar/:idUsuario',
        [
            authJwt.verificaToken,
            authJwt.eOProprio
        ],
        usuarioController.alterar
    );

    app.get(
        '/api/usuario/buscar/:idUsuario',
        [
            authJwt.verificaToken,
            authJwt.eOProprio
        ],
        usuarioController.buscarPorId
    );

    app.get(
        '/api/usuario/buscar/:loginUsuario',
        [
            authJwt.verificaToken,
            authJwt.eOProprio
        ],
        usuarioController.buscarPorLogin
    );
}

export default usuarioRoutes;