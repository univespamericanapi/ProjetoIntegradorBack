import cosplayCircuitoController from '../controllers/cosplayCircuito.controller.js';

const cosplayCircuitoRoutes = (app) => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.post('/api/cosplay/circuito/criar', cosplayCircuitoController.criar);
};

export default cosplayCircuitoRoutes;