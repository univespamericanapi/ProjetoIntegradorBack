import authRoutes from '../routes/auth.route.js';
import demoRoutes from './demo.route.js';
import listaRoutes from '../routes/lista.route.js';
import eventoRoutes from '../routes/evento.route.js';
import configRoutes from '../routes/config_concurso.route.js';
import desfileRoutes from './desfile.route.js';

const indexRoutes = app => {
    authRoutes(app);
    demoRoutes(app);
    listaRoutes(app);
    eventoRoutes(app);
    configRoutes(app);
    desfileRoutes(app);
};

export default indexRoutes;