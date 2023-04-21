import listaController from "../controllers/lista.controller.js";

const listaRoutes = app => {
    app.get('/api/lista/cargo', listaController.cargo);
    app.get('/api/lista/categoria', listaController.categoria);
    app.get('/api/lista/cidade', listaController.cidade);
    app.get('/api/lista/estado', listaController.estado);
    app.get('/api/lista/estilo', listaController.estilo);
    app.get('/api/lista/modalidade', listaController.modalidade);
};

export default listaRoutes;