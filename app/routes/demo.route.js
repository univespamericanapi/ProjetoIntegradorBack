import authJwt from '../middlewares/authJwt.js';
import demoController from '../controllers/demo.controller.js';

const demoRoutes = (app) => {
	app.use((req, res, next) => {
		res.header(
			'Access-Control-Allow-Headers',
			'x-access-token, Origin, Content-Type, Accept'
		);
		next();
	});

	app.get('/api/all', demoController.allAccess);
	app.get('/api/user', [authJwt.verificaToken], demoController.userBoard);
	app.get(
		'/api/staff',
		[authJwt.verificaToken, authJwt.eStaff],
		demoController.staffBoard
	);
	app.get(
		'/api/admin',
		[authJwt.verificaToken, authJwt.eAdmin],
		demoController.adminBoard
	);
};

export default demoRoutes;
