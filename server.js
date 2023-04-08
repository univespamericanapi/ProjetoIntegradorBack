import express, { json, urlencoded } from 'express';
import cors from 'cors';
import db from './app/models/db.model.js';
import { authConfig } from './app/config/auth.config.js';

const app = express();

// Configuração do aplicativo
app.use(cors({ origin: authConfig.corsOrigin }));
app.use(json());
app.use(urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Avalon back-end application.' });
});

// Rotas
import authRoutes from './app/routes/auth.route.js';
import usuarioRoutes from './app/routes/usuario.route.js';
import listaRoutes from './app/routes/lista.route.js';
import eventoRoutes from './app/routes/evento.route.js';

authRoutes(app);
usuarioRoutes(app);
listaRoutes(app);
eventoRoutes(app);

// Executando na porta
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// Conexão com o banco de dados
conectarAoBanco();

// In production, use this code
// async function conectarAoBanco() {
//     try {
//         await db.sequelize.authenticate();
//         console.log("Conexão estabelicida com sucesso.");

//         await db.sequelize.sync();
//         console.log("Todos os modelos foram sincronizados com sucesso.");

//     } catch (error) {
//         console.error("Não foi possível se conectar ao banco de dados:", error);
//     }
// }

// In development or in first time run, use this code
// :::::::: Caution ::::::::
// This code will drop all tables
import addData from './app/data/add.data.js';

async function conectarAoBanco() {
    try {
        await db.sequelize.authenticate();
        console.log("Conexão estabelicida com sucesso.");

        await db.sequelize.sync({ force: true }).then(async () => {
            console.log('Removendo e Resincronizando o Banco de Dados');

            const Cargo = db.cargo;
            const Usuario = db.usuario;
            const Cidade = db.cidade;
            const Estado = db.estado;
            const Categoria = db.categoria;

            await addData.cargo(Cargo);
            await addData.estado(Estado);
            await addData.cidade(Estado, Cidade);
            await addData.categoria(Categoria);
            await addData.usuario(Cargo, Usuario); // Update this function when finish the development
        });
        console.log("Todos os modelos foram sincronizados com sucesso.");
    } catch (error) {
        console.error("Não foi possível se conectar ao banco de dados:", error);
    }
}