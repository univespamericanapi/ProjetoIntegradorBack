import Sequelize from "sequelize";
import { configDB } from "../config/db.config.js";
import { user } from './user.model.js';
import { role } from './role.model.js';
import { refreshToken } from "./refreshToken.model.js";
import { evento } from "./evento.model.js";
import { participante } from "./participante.model.js";
import { personagem } from "./personagem.model.js";
import { cidades } from "./cidades.models.js";
import { estados } from "./estados.models.js";
import { desfileCosplay } from "./desfile_cosplay.model.js";
import { categoria } from "./categoria.model.js";

// Instance of Sequelize
const sequelize = new Sequelize(configDB.dbname, configDB.user, configDB.password, {
    host: configDB.host,
    dialect: configDB.dialect,
    operatorsAliases: false,
    pool: configDB.pool
});

// Instance of tables
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.refreshToken = refreshToken(sequelize, Sequelize);
db.user = user(sequelize, Sequelize);
db.role = role(sequelize, Sequelize);
db.evento = evento(sequelize, Sequelize);
db.personagem = personagem(sequelize, Sequelize);
db.participante = participante(sequelize, Sequelize);
db.cidades = cidades(sequelize, Sequelize);
db.estados = estados(sequelize, Sequelize);
db.desfile = desfileCosplay(sequelize, Sequelize);
db.categoria = categoria(sequelize, Sequelize);

// Database Relationships
// Cidades - Estados
db.estados.hasMany(db.cidades, {
    foreignKey: 'cid_estado'
});
db.cidades.belongsTo(db.estados, {
    foreignKey: 'cid_estado'
});

// Participantes - Estados
db.estados.hasMany(db.participante, {
    foreignKey: 'part_est'
});
db.participante.belongsTo(db.estados, {
    foreignKey: 'part_est'
});

// Participantes - Cidades
db.cidades.hasMany(db.participante, {
    foreignKey: 'part_cidade'
});
db.participante.belongsTo(db.cidades, {
    foreignKey: 'part_cidade'
});

// Participantes - Personagens
db.participante.hasMany(db.personagem, {
    foreignKey: 'pers_part'
});
db.personagem.belongsTo(db.participante, {
    foreignKey: 'pers_part'
});

// Desfile - Evento
db.evento.hasMany(db.desfile, {
    foreignKey: 'desf_event'
});
db.desfile.belongsTo(db.evento, {
    foreignKey: 'desf_event'
});

// Desfile - Personagens
db.personagem.hasMany(db.desfile, {
    foreignKey: 'desf_pers'
});
db.desfile.belongsTo(db.personagem, {
    foreignKey: 'desf_pers'
});

// Desfile - Categoria
db.categoria.hasMany(db.desfile, {
    foreignKey: 'desf_categ'
});
db.desfile.belongsTo(db.categoria, {
    foreignKey: 'desf_categ'
});

// User - Role
db.role.hasMany(db.user, {
    foreignKey: 'roleId'
});
db.user.belongsTo(db.role, {
    foreignKey: 'roleId'
});

// refreshToken - user
db.refreshToken.belongsTo(db.user, {
    foreignKey: 'userId',
    targetKey: 'idUser'
});
db.user.hasOne(db.refreshToken, {
    foreignKey: 'userId',
    targetKey: 'idUser'
});

// Functions
db.dataConverter = dataString => {
    const dataArray = dataString.split("/");
    return new Date(dataArray[2], dataArray[1] - 1, dataArray[0]);
};

export default db;