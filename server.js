import express, { json, urlencoded } from 'express';
import cors from 'cors';
import db from './app/models/db.model.js';
import { configAuth } from './app/config/auth.config.js';
import { configRoles } from './app/config/role.config.js';
import routesAuth from './app/routes/auth.route.js';
import routesUser from './app/routes/user.route.js';

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

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// For production
// db.sequelize.sync();

// In development
import bcrypt from 'bcryptjs';
const Role = db.role;
const User = db.user;
const Op = db.Sequelize.Op;
const rolesUser = "admin";

db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync Db');
    initial();
});

function initial() {
    configRoles.forEach(role => {
        Role.create({
            name: role
        });
    });

    User.create({
        username: 'jhonatanjb',
        password: bcrypt.hashSync('123', 8),
        name: 'Jhonatan',
        lastName: 'Cassante'
    }).then(user => {
        Role.findOne({
            where: {
                name: rolesUser
            }
        }).then(role => {
            user.setRole(role);
        });
    });
}