import authRoutes from '../routes/auth.route.js';
import demoRoutes from './demo.route.js';
import listaRoutes from '../routes/lista.route.js';
import eventoRoutes from '../routes/evento.route.js';
import usuarioRoutes from './usuario.route.js';
import concursoRoutes from './concurso.route.js';
import cosplayDesfileRoutes from './cosplayDesfile.route.js';
import emailRoutes from './email.route.js';

const indexRoutes = app => {
    // desfileRoutes(app);
    // notaRoutes(app);
    
    authRoutes(app);
    usuarioRoutes(app);
    listaRoutes(app);
    eventoRoutes(app);
    demoRoutes(app);
    concursoRoutes(app);
    cosplayDesfileRoutes(app);
    emailRoutes(app);
};

export default indexRoutes;