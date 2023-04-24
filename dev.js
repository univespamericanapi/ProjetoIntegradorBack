import express, { json, urlencoded } from 'express';
import cors from 'cors';
import db from './app/models/db.model.js';
import swaggerUI from 'swagger-ui-express'
import swaggerDocs from './docs/swagger.json' assert {type: 'json'};
import { createSeeder } from './app/database/seeders/index.seeder.js';
import config from './app/config/config.js';

const app = express();

const fast = 1;

// Configuração do aplicativo
app.use(cors({ origin: config.corsOrigin }));
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

// Conexão com o banco de dados
conectarAoBanco();

// In development use this code
async function conectarAoBanco() {
    try {
        await db.sequelize.authenticate();
        console.log("Conexão estabelicida com sucesso.");

        if (fast) {
            //For fast inicialization
            await db.sequelize.sync();
        } else {
            // :::::::: Caution ::::::::
            // This code will drop all tables everytime
            await db.sequelize.sync({ force: true }).then(async () => {
                console.log('Removendo e Resincronizando o Banco de Dados');

                await createSeeder();
            });
        }

        console.log("Todos os modelos foram sincronizados com sucesso.");
    } catch (error) {
        console.error("Não foi possível se conectar ao banco de dados:", error);
    }
}