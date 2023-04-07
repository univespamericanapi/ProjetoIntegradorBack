import controllerCidEst from "../controllers/CidEst.controller.js";

const routesCidadesUF = app => {
    app.get('/api/cadastro/cidades', controllerCidEst.cidades);
    app.get('/api/cadastro/estados', controllerCidEst.estados);
};

export default routesCidadesUF;