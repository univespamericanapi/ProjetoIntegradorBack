import emailController from "../controllers/email.controller.js";

const emailRoutes = app => {
    app.get('/api/cadastro/verificar/:id/:token', emailController.verificarEmail);
};

export default emailRoutes;