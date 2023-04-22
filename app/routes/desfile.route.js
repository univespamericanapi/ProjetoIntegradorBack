import authJwt from "../middlewares/authJwt.js";
import desfileCtrl from "../controllers/desfile.ctrl.js";
import verificaDuplicado from "../middleware/verificaDuplicado.js";

const desfileRoutes = app => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.post('/api/desfile/create', [verificaDuplicado.checaDuplicadoDesfile], desfileCtrl.novoDesfile);
    app.get('/api/lista/desfile/:idEvento', desfileCtrl.desfileLista);
    app.put('/api/staff/desfile/checkin/:id', [authJwt.verificaToken, authJwt.eStaff], desfileCtrl.desfileCheckin);
    app.get('/api/staff/desfile/resultado/:idEvento', [authJwt.verificaToken, authJwt.eStaff], desfileCtrl.desfileResultado);
};

export default desfileRoutes;