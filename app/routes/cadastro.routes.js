import controllerCadastro from "../controllers/cadastro.controller.js";

const routesCadastro = app => {
    app.get('/api/cadastro/cidades', controllerCadastro.cidades);
    app.get('/api/cadastro/estados', controllerCadastro.estados);
    app.get('/api/cadastro/categorias', controllerCadastro.categorias);
};

export default routesCadastro;