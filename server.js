import express, { json, urlencoded } from 'express';
import cors from 'cors';
import db from './app/models/db.model.js';
import { authConfig } from './app/config/auth.config.js';
import swaggerUI from 'swagger-ui-express'
import swaggerDocs from './docs/swagger.json' assert {type: 'json'};

const app = express();

// Configuração do aplicativo
app.use(cors({ origin: authConfig.corsOrigin }));
app.use(json());
app.use(urlencoded({ extended: true }));

// Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Avalon back-end application.' });
});

// Rotas
import indexRoutes from './app/routes/index.route.js';

indexRoutes(app);

// Executando na porta
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

import addData from './app/data/add.data.js';

// Conexão com o banco de dados
conectarAoBanco();

// In production, use this code
async function conectarAoBanco() {
    try {
        await db.sequelize.authenticate();
        console.log("Conexão estabelicida com sucesso.");

        await db.sequelize.sync();
        console.log("Todos os modelos foram sincronizados com sucesso.");

        await addData.create();

    } catch (error) {
        console.error("Não foi possível se conectar ao banco de dados:", error);
    }
}