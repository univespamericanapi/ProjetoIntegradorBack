import authJwt from "../middlewares/authJwt.js";
import notaCtrl from "../controllers/nota.ctrl.js";

const notaRoutes = app => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.post('/api/staff/desfile/nota/add', [authJwt.verificaToken, authJwt.eStaff], notaCtrl.inserirNota);
};

export default notaRoutes;