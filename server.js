import express, { json, urlencoded } from 'express';
import cors from 'cors';
import db from './app/models/db.model.js';
import { configAuth } from './app/config/auth.config.js';
import routesAuth from './app/routes/auth.route.js';
import routesUser from './app/routes/user.route.js';
import routesCidades from './app/routes/cidadesUF.route.js';

const app = express();

const corsOptions = {
    origin: configAuth.corsOrigin
};

app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Avalon back-end application.' });
});

routesAuth(app);
routesUser(app);
routesCidades(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

connectToDatabase();

// For production
async function connectToDatabase() {
    try {
        await db.sequelize.authenticate();
        console.log("Connection has been established successfully.");

        await db.sequelize.sync();
        console.log("All models were synchronized successfully.");

    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

// In development
// import { cidadesUFConfig } from './app/config/cidadesUF.config.js';
// import bcrypt from 'bcryptjs';
// import { configRoles } from './app/config/role.config.js';

// async function connectToDatabase() {
//     try {
//         await db.sequelize.authenticate();
//         console.log("Connection has been established successfully.");

//         await db.sequelize.sync({ force: false });
//         console.log("All models were synchronized successfully.");

//         const Role = db.role;
//         const User = db.user;
//         const Cidades = db.cidades;

//         initial(Role, User, Cidades);
//     } catch (error) {
//         console.error("Unable to connect to the database:", error);
//     }
// }

// async function initial(Role, User, Cidades) {
//     configRoles.forEach(async role => {
//         await Role.create({
//             name: role
//         });
//     });

//     cidadesUFConfig(Cidades);

//     await User.create({
//         username: 'jhonatanjb',
//         password: bcrypt.hashSync('123', 8),
//         name: 'Jhonatan',
//         lastName: 'Cassante'
//     }).then(user => {
//         Role.findOne({
//             where: {
//                 name: "admin"
//             }
//         }).then(role => {
//             user.setRole(role);
//         });
//     });

//     await User.create({
//         username: 'tester1',
//         password: bcrypt.hashSync('123', 8),
//         name: 'Tester',
//         lastName: 'Tester'
//     }).then(user => {
//         Role.findOne({
//             where: {
//                 name: "staff"
//             }
//         }).then(role => {
//             user.setRole(role);
//         });
//     });

//     await User.create({
//         username: 'tester2',
//         password: bcrypt.hashSync('123', 8),
//         name: 'Tester',
//         lastName: 'Tester'
//     }).then(user => {
//         Role.findOne({
//             where: {
//                 name: "staff"
//             }
//         }).then(role => {
//             user.setRole(role);
//         });
//     });

//     await User.create({
//         username: 'tester3',
//         password: bcrypt.hashSync('123', 8),
//         name: 'Tester',
//         lastName: 'Tester'
//     }).then(user => {
//         Role.findOne({
//             where: {
//                 name: "user"
//             }
//         }).then(role => {
//             user.setRole(role);
//         });
//     });
// }