import authRoutes from '../routes/auth.route.js';
import demoRoutes from './demo.route.js';
import listaRoutes from '../routes/lista.route.js';
import eventoRoutes from '../routes/evento.route.js';
import desfileRoutes from './desfile.route.js';
import notaRoutes from './nota.route.js';
import usuarioRoutes from './usuario.route.js';
import concursoRoutes from './concurso.route.js';

const indexRoutes = app => {
    // desfileRoutes(app);
    // notaRoutes(app);
    
    authRoutes(app);
    usuarioRoutes(app);
    listaRoutes(app);
    eventoRoutes(app);
    demoRoutes(app);
    concursoRoutes(app);
};

export default indexRoutes;