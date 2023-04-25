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

    app.get('/api/admin/usuario/listar',
        [
            authJwt.verificaToken,
            authJwt.eAdmin
        ],
        usuarioController.listar
    );

    app.get('/api/usuario/buscar/:idUsuario',
        [
            authJwt.verificaToken,
            authJwt.eOProprio
        ],
        usuarioController.buscarPorId
    );

    app.get('/api/usuario/buscar',
        [
            authJwt.verificaToken,
            authJwt.eOProprio
        ],
        usuarioController.buscarPorLogin
    );

    app.post('/api/admin/usuario/criar',
        [
            authJwt.verificaToken,
            authJwt.eAdmin
        ],
        usuarioController.criar
    );

    app.put('/api/admin/usuario/atualizar/:idUsuario',
        [
            authJwt.verificaToken,
            authJwt.eAdmin
        ],
        usuarioController.atualizarPorAdmin
    );

    app.put('/api/usuario/atualizar/:idUsuario',
        [
            authJwt.verificaToken,
            authJwt.eOProprio
        ],
        usuarioController.atualizar
    );

    app.delete('/api/admin/usuario/deletar/:idUsuario',
        [
            authJwt.verificaToken,
            authJwt.eAdmin
        ],
        usuarioController.deletar
    );
}

export default usuarioRoutes;