import authRoutes from './auth.route.js';
import demoRoutes from './demo.route.js';
import listaRoutes from './lista.route.js';
import eventoRoutes from './evento.route.js';
import usuarioRoutes from './usuario.route.js';
import concursoRoutes from './concurso.route.js';
import emailRoutes from './email.route.js';
import cadastroParticipanteRoutes from './cadastroParticipante.route.js';
import checkinRoutes from './checkin.route.js';
import graficoRoutes from './grafico.route.js';

const indexRoutes = (app) => {
	authRoutes(app);
	usuarioRoutes(app);
	listaRoutes(app);
	eventoRoutes(app);
	demoRoutes(app);
	concursoRoutes(app);
	cadastroParticipanteRoutes(app);
	emailRoutes(app);
	checkinRoutes(app);
	graficoRoutes(app);
};

export default indexRoutes;
