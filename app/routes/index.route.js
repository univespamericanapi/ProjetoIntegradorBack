import authRoutes from '../routes/auth.route.js';
import demoRoutes from './demo.route.js';
import listaRoutes from '../routes/lista.route.js';
import eventoRoutes from '../routes/evento.route.js';
import configRoutes from '../routes/config_concurso.route.js';
import desfileRoutes from './desfile.route.js';
import notaRoutes from './nota.route.js';
import usuarioRoutes from './usuario.route.js';

const indexRoutes = app => {
    // listaRoutes(app);
    // eventoRoutes(app);
    // configRoutes(app);
    // desfileRoutes(app);
    // notaRoutes(app);

    authRoutes(app);
    usuarioRoutes(app);
    demoRoutes(app);
};

export default indexRoutes;