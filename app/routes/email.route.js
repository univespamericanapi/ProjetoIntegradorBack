import emailController from '../controllers/email.controller.js';

const emailRoutes = (app) => {
	app.get('/api/cadastro/verificar/:id/:token', emailController.verificarEmail);
	app.get('/api/cadastro/reenviar', emailController.reenviar);
	app.put('/api/cadastro/alterar-email', emailController.alterarEmail);
};

export default emailRoutes;
