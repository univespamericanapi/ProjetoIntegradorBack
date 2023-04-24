import emailController from "../controllers/email.controller.js";

const emailRoutes = app => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.get('/api/cadastro/verificar/:id/:token', emailController.verificarEmail);
};

export default emailRoutes;