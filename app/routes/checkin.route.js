import authJwt from '../middlewares/authJwt.js';
import checkinController from '../controllers/checkin.controller.js';

const checkinRoutes = (app) => {
	app.use((req, res, next) => {
		res.header(
			'Access-Control-Allow-Headers',
			'x-access-token, Origin, Content-Type, Accept'
		);
		next();
	});

	app.get(
		'/api/staff/competidores/listar',
		[authJwt.verificaToken, authJwt.eStaff],
		checkinController.listarInscricoes
	);

	app.put(
		'/api/staff/competidores/checkin/:partId',
		[authJwt.verificaToken, authJwt.eStaff],
		checkinController.registrarCheckin
	);
};

export default checkinRoutes;
