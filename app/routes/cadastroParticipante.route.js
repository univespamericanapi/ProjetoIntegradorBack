import cadastroParticipanteController from "../controllers/cadastroParticipante.controller.js";

const cadastroParticipanteRoutes = (app) => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.post('/api/participante/cadastro/criar', cadastroParticipanteController.criar);
};

export default cadastroParticipanteRoutes;