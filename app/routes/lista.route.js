import listaCtrl from "../controllers/lista.ctrl.js";

const listaRoutes = app => {
    app.get('/api/lista/cidade', listaCtrl.cidade);
    app.get('/api/lista/estado', listaCtrl.estado);
    app.get('/api/lista/categoria', listaCtrl.categoria);
};

export default listaRoutes;