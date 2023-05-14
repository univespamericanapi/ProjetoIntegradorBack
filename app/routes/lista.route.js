import listaController from '../controllers/lista.controller.js';
import authJwt from '../middlewares/authJwt.js';

const listaRoutes = (app) => {
	app.use((req, res, next) => {
		res.header(
			'Access-Control-Allow-Headers',
			'x-access-token, Origin, Content-Type, Accept'
		);
		next();
	});

	app.get(
		'/api/admin/lista/cargo',
		[authJwt.verificaToken, authJwt.eAdmin],
		listaController.cargo
	);
	app.get('/api/lista/categoria', listaController.categoria);
	app.get('/api/lista/cidade', listaController.cidade);
	app.get('/api/lista/concurso/:idEvento', listaController.concurso);
	app.get('/api/lista/estado', listaController.estado);
	app.get('/api/lista/estilo', listaController.estilo);
	app.get('/api/lista/evento', listaController.evento);
	app.get('/api/lista/modalidade', listaController.modalidade);
};

export default listaRoutes;
