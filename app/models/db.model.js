import Sequelize from "sequelize";
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
import { concurso } from "./concurso.model.js";
import { configConcurso } from "./config_concurso.model.js";
import { nota } from "./nota.model.js";
import config from "../config/config.js";

// Instance of Sequelize
const sequelize = new Sequelize(config.bancoDeDados.dbname, config.bancoDeDados.user, config.bancoDeDados.password, {
    host: config.bancoDeDados.host,
    dialect: config.bancoDeDados.dialect,
    operatorsAliases: false,
    pool: config.bancoDeDados.pool
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
db.concurso = concurso(sequelize, Sequelize);
db.config = configConcurso(sequelize, Sequelize);
db.nota = nota(sequelize, Sequelize);

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

// Nota - Usuario
db.usuario.hasMany(db.nota, {
    foreignKey: 'nota_usuario'
});
db.nota.belongsTo(db.usuario, {
    foreignKey: 'nota_usuario'
});

// Nota - Desfile
db.desfile.hasMany(db.nota, {
    foreignKey: 'nota_desfile'
});
db.nota.belongsTo(db.desfile, {
    foreignKey: 'nota_desfile'
});

// Config - Concurso
db.concurso.hasMany(db.config, {
    foreignKey: 'config_concurso'
});
db.config.belongsTo(db.concurso, {
    foreignKey: 'config_concurso'
});

// Config - Evento
db.evento.hasMany(db.config, {
    foreignKey: 'config_event'
});
db.config.belongsTo(db.evento, {
    foreignKey: 'config_event'
});

export default db;