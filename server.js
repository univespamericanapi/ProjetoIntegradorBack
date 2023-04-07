import express, { json, urlencoded } from 'express';
import cors from 'cors';
import db from './app/models/db.model.js';
import { configAuth } from './app/config/auth.config.js';
import routesAuth from './app/routes/auth.route.js';
import routesUser from './app/routes/user.route.js';
import routesCidEst from './app/routes/cidEst.route.js';
import routesCategoria from './app/routes/categoria.route.js';

const app = express();

// Configuração do aplicativo
app.use(cors({ origin: configAuth.corsOrigin }));
app.use(json());
app.use(urlencoded({ extended: true }));

// Rotas
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Avalon back-end application.' });
});

routesAuth(app);
routesUser(app);
routesCidEst(app);
routesCategoria(app);

// Escutando
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// Conexão com o banco de dados
connectToDatabase();

// For production
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

// In development
import { cidEstConfig } from './app/config/cidEst.config.js';
import bcrypt from 'bcryptjs';
import { configRoles } from './app/config/role.config.js';
import { configCategorias } from './app/config/categorias.config.js';

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

            await rolesAdd(Role)
            await cidEstConfig(Estados, Cidades);
            await categoriasAdd(Categorias);
            await usersAdd(Role, User);
        });
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

async function categoriasAdd(Categorias) {
    configCategorias.forEach(async categoria => {
        await Categorias.create({
            categ_nome: categoria
        });
    });
}

async function rolesAdd(Role) {
    configRoles.forEach(async role => {
        await Role.create({
            name: role
        });
    });
}

function usersAdd(Role, User) {
    configRoles.forEach(async roleInDb => {
        await Role.findOne({
            where: {
                name: roleInDb
            }
        }).then(role => {
            User.create({
                username: roleInDb,
                password: bcrypt.hashSync(roleInDb, 8),
                name: roleInDb,
                roleId: role.idRole
            });
        });
    });
}