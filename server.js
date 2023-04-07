import express, { json, urlencoded } from 'express';
import cors from 'cors';
import db from './app/models/db.model.js';
import { configAuth } from './app/config/auth.config.js';

const app = express();

// Configuração do aplicativo
app.use(cors({ origin: configAuth.corsOrigin }));
app.use(json());
app.use(urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Avalon back-end application.' });
});

// Rotas
import routesAuth from './app/routes/auth.route.js';
import routesUser from './app/routes/user.route.js';
import routesCadastro from './app/routes/cadastro.routes.js';

routesAuth(app);
routesUser(app);
routesCadastro(app);

// Executando na porta
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// Conexão com o banco de dados
connectToDatabase();

// In production, use this code
// async function connectToDatabase() {
//     try {
//         await db.sequelize.authenticate();
//         console.log("Connection has been established successfully.");

//         await db.sequelize.sync();
//         console.log("All models were synchronized successfully.");

//     } catch (error) {
//         console.error("Unable to connect to the database:", error);
//     }
// }

// In development or in first time run, use this code
// :::::::: Caution ::::::::
// This code will drop all tables
import addData from './app/data/add.data.js';

async function connectToDatabase() {
    try {
        await db.sequelize.authenticate();
        console.log("Connection has been established successfully.");

        await db.sequelize.sync({ force: true }).then(async () => {
            console.log('Drop and Resync Db');

            const Role = db.role;
            const User = db.user;
            const Cidades = db.cidades;
            const Estados = db.estados;
            const Categorias = db.categoria;

            await addData.roles(Role);
            await addData.estados(Estados);
            await addData.cidades(Estados, Cidades);
            await addData.categorias(Categorias);
            await addData.users(Role, User);
        });
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}