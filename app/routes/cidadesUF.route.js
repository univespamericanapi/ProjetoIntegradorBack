import controllerCidadesUF from "../controllers/cidadesUF.controller.js";

const routesCidadesUF = app => {
    app.get('/api/cadastro/cidades', controllerCidadesUF.cidades);
    app.get('/api/cadastro/estados', controllerCidadesUF.estados);
};

export default routesCidadesUF;