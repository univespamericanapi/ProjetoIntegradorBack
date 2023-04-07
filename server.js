import express, { json, urlencoded } from 'express';
import cors from 'cors';
import db from './app/models/db.model.js';
import { configAuth } from './app/config/auth.config.js';
import routesAuth from './app/routes/auth.route.js';
import routesUser from './app/routes/user.route.js';
import routesCidEst from './app/routes/cidEst.route.js';

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

async function connectToDatabase() {
    try {
        await db.sequelize.authenticate();
        console.log("Connection has been established successfully.");

        await db.sequelize.sync({ force: true }).then(() => {
            console.log('Drop and Resync Db');

            const Role = db.role;
            const User = db.user;
            const Cidades = db.cidades;
            const Estados = db.estados;

            cidEstConfig(Estados, Cidades);
            initial(Role, User);
        });
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

async function initial(Role, User) {
    configRoles.forEach(async role => {
        await Role.create({
            name: role
        });
    });

    await User.create({
        username: 'admin',
        password: bcrypt.hashSync('admin', 8),
        name: 'Admin',
        lastName: 'User'
    }).then(user => {
        Role.findOne({
            where: {
                name: "admin"
            }
        }).then(role => {
            user.setRole(role);
        });
    });

    await User.create({
        username: 'staff',
        password: bcrypt.hashSync('staff', 8),
        name: 'Staff',
        lastName: 'User'
    }).then(user => {
        Role.findOne({
            where: {
                name: "staff"
            }
        }).then(role => {
            user.setRole(role);
        });
    });

    await User.create({
        username: 'user',
        password: bcrypt.hashSync('user', 8),
        name: 'User',
        lastName: 'User'
    }).then(user => {
        Role.findOne({
            where: {
                name: "user"
            }
        }).then(role => {
            user.setRole(role);
        });
    });
}