import controllerCidadesUF from "../controllers/cidadesUF.controller.js";

const routesCidadesUF = app => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.get('/api/cadastro/cidades', controllerCidadesUF.cidades);
    app.get('/api/cadastro/estados', controllerCidadesUF.estados);
};

export default routesCidadesUF;