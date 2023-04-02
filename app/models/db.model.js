import Sequelize from "sequelize";
import { user } from './user.model.js';
import { role } from './role.model.js';
import { refreshToken } from "./refreshToken.model.js";
import { configDB } from "../config/db.config.js";

const sequelize = new Sequelize(configDB.dbname, configDB.user, configDB.password, {
    host: configDB.host,
    dialect: configDB.dialect,
    operatorsAliases: false,
    pool: configDB.pool
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = user(sequelize, Sequelize);
db.role = role(sequelize, Sequelize);
db.refreshToken = refreshToken(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
    through: 'user_roles',
    foreignKey: 'roleId',
    otherKey: 'userId'
});

db.user.belongsToMany(db.role, {
    through: 'user_roles',
    foreignKey: 'userId',
    otherKey: 'roleId'
});

db.refreshToken.belongsTo(db.user, {
    foreignKey: 'userId',
    targetKey: 'idUser'
});

db.user.hasOne(db.refreshToken, {
    foreignKey: 'userId',
    targetKey: 'idUser'
});

db.ROLES = configDB.roles

export default db;