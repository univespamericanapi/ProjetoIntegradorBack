import { controllerCategorias } from "../controllers/categoria.controller.js";

const routesCategoria = app => {
    app.get('/api/cadastro/categorias', controllerCategorias);
};

export default routesCategoria;