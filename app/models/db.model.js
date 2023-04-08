import Sequelize from "sequelize";
import { dbConfig } from "../config/db.config.js";
import { usuario } from './usuario.model.js';
import { cargo } from './cargo.model.js';
import { refreshToken } from "./refreshToken.model.js";
import { evento } from "./evento.model.js";
import { participante } from "./participante.model.js";
import { personagem } from "./personagem.model.js";
import { cidade } from "./cidade.model.js";
import { estado } from "./estado.model.js";
import { desfileCosplay } from "./desfile_cosplay.model.js";
import { categoria } from "./categoria.model.js";

// Instance of Sequelize
const sequelize = new Sequelize(dbConfig.dbname, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: dbConfig.pool
});

// Instance of tables
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.refreshToken = refreshToken(sequelize, Sequelize);
db.usuario = usuario(sequelize, Sequelize);
db.cargo = cargo(sequelize, Sequelize);
db.evento = evento(sequelize, Sequelize);
db.personagem = personagem(sequelize, Sequelize);
db.participante = participante(sequelize, Sequelize);
db.cidade = cidade(sequelize, Sequelize);
db.estado = estado(sequelize, Sequelize);
db.desfile = desfileCosplay(sequelize, Sequelize);
db.categoria = categoria(sequelize, Sequelize);

// Database Relationships
// Cidades - Estados
db.estado.hasMany(db.cidade, {
    foreignKey: 'cid_estado'
});
db.cidade.belongsTo(db.estado, {
    foreignKey: 'cid_estado'
});

// Participantes - Estados
db.estado.hasMany(db.participante, {
    foreignKey: 'part_est'
});
db.participante.belongsTo(db.estado, {
    foreignKey: 'part_est'
});

// Participantes - Cidades
db.cidade.hasMany(db.participante, {
    foreignKey: 'part_cidade'
});
db.participante.belongsTo(db.cidade, {
    foreignKey: 'part_cidade'
});

// Participantes - Personagens
db.participante.hasMany(db.personagem, {
    foreignKey: 'pers_part'
});
db.personagem.belongsTo(db.participante, {
    foreignKey: 'pers_part'
});

// Evento - Estados
db.estado.hasMany(db.evento, {
    foreignKey: 'event_estado'
});
db.evento.belongsTo(db.estado, {
    foreignKey: 'event_estado'
});

// Evento - Cidades
db.cidade.hasMany(db.evento, {
    foreignKey: 'event_cidade'
});
db.evento.belongsTo(db.cidade, {
    foreignKey: 'event_cidade'
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
db.cargo.hasMany(db.usuario, {
    foreignKey: 'usuario_cargo'
});
db.usuario.belongsTo(db.cargo, {
    foreignKey: 'usuario_cargo'
});

// refreshToken - user
db.refreshToken.belongsTo(db.usuario, {
    foreignKey: 'refreshToken_usuario',
    targetKey: 'usuario_id'
});
db.usuario.hasOne(db.refreshToken, {
    foreignKey: 'refreshToken_usuario',
    targetKey: 'usuario_id'
});

// Functions
db.dataConverter = dataString => {
    const dataArray = dataString.split("/");
    return new Date(dataArray[2], dataArray[1] - 1, dataArray[0]);
};

export default db;