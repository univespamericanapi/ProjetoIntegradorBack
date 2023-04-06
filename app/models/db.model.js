import Sequelize from "sequelize";
import { configDB } from "../config/db.config.js";
import { user } from './user.model.js';
import { role } from './role.model.js';
import { refreshToken } from "./refreshToken.model.js";
import { evento } from "./evento.model.js";
import { participante } from "./participante.model.js";
import { personagem } from "./personagem.model.js";
import { cidades } from "./cidades.models.js";

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
db.evento = evento(sequelize, Sequelize);
db.participante = participante(sequelize, Sequelize);
db.personagem = personagem(sequelize, Sequelize);
db.cidades = cidades(sequelize, Sequelize);

db.role.hasMany(db.user, {
    foreignKey: 'roleId'
});
db.user.belongsTo(db.role, {
    foreignKey: 'roleId'
});

db.refreshToken.belongsTo(db.user, {
    foreignKey: 'userId',
    targetKey: 'idUser'
});
db.user.hasOne(db.refreshToken, {
    foreignKey: 'userId',
    targetKey: 'idUser'
});

db.participante.hasMany(db.personagem, {
    foreignKey: 'idParticipante'
});
db.personagem.belongsTo(db.participante, {
    foreignKey: 'idParticipante'
});

export default db;
