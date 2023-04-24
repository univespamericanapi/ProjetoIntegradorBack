import authJwt from "../middlewares/authJwt.js";
import cosplayDesfileController from "../controllers/cosplayDesfile.controller.js";

const cosplayDesfileRoutes = app => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.post('/api/cosplay/desfile/criar', cosplayDesfileController.criar);
};

export default cosplayDesfileRoutes;