import authJwt from "../middlewares/authJwt.js";
import demoCtrl from "../controllers/demo.ctrl.js";

const demoRoutes = app => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.get('/api/all', demoCtrl.allAccess);
    app.get('/api/user', [authJwt.verificaToken], demoCtrl.userBoard);
    app.get('/api/staff', [authJwt.verificaToken, authJwt.eStaff], demoCtrl.staffBoard);
    app.get('/api/admin', [authJwt.verificaToken, authJwt.eAdmin], demoCtrl.adminBoard);
};

export default demoRoutes;