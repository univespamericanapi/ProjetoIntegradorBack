import Sequelize from 'sequelize';
import config from '../config/config.js';
import { apresentacao } from './apresentacao.model.js';
import { cargo } from './cargo.model.js';
import { categoria } from './categoria.model.js';
import { competidor } from './competidor.model.js';
import { concurso } from './concurso.model.js';
import { cospCirc } from './cosp_circ.model.js';
import { cospDesf } from './cosp_desf.model.js';
import { estilo } from './estilo.model.js';
import { evento } from './evento.model.js';
import { kpopCirc } from './kpop_circ.model.js';
import { kpopSolo } from './kpop_solo.model.js';
import { modalidade } from './modalidade.model.js';
import { nota } from './nota.model.js';
import { participacao } from './participacao.model.js';
import { refreshToken } from './refreshToken.model.js';
import { emailToken } from './emailToken.model.js';
import { usuario } from './usuario.model.js';

// Instance of Sequelize
const sequelize = new Sequelize(
	config.bancoDeDados.dbname,
	config.bancoDeDados.user,
	config.bancoDeDados.password,
	{
		host: config.bancoDeDados.host,
		port: 3306,
		dialect: config.bancoDeDados.dialect,
		operatorsAliases: false,
		pool: config.bancoDeDados.pool,
	}
);

// Instance of tables
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.apresentacao = apresentacao(sequelize, Sequelize);
db.cargo = cargo(sequelize, Sequelize);
db.categoria = categoria(sequelize, Sequelize);
db.competidor = competidor(sequelize, Sequelize);
db.concurso = concurso(sequelize, Sequelize);
db.cospCirc = cospCirc(sequelize, Sequelize);
db.cospDesf = cospDesf(sequelize, Sequelize);
db.estilo = estilo(sequelize, Sequelize);
db.evento = evento(sequelize, Sequelize);
db.kpopCirc = kpopCirc(sequelize, Sequelize);
db.kpopSolo = kpopSolo(sequelize, Sequelize);
db.modalidade = modalidade(sequelize, Sequelize);
db.nota = nota(sequelize, Sequelize);
db.participacao = participacao(sequelize, Sequelize);
db.refreshToken = refreshToken(sequelize, Sequelize);
db.emailToken = emailToken(sequelize, Sequelize);
db.usuario = usuario(sequelize, Sequelize);

// Database Relationships
// apresentacao - competidor
db.competidor.hasMany(db.apresentacao, {
	foreignKey: 'apres_comp',
});
db.apresentacao.belongsTo(db.competidor, {
	foreignKey: 'apres_comp',
});

// usuario - competidor
db.usuario.hasOne(db.competidor, {
	foreignKey: 'comp_usua',
});
db.competidor.belongsTo(db.usuario, {
	foreignKey: 'comp_usua',
});

// concurso - evento
db.evento.hasMany(db.concurso, {
	foreignKey: 'conc_event',
});
db.concurso.belongsTo(db.evento, {
	foreignKey: 'conc_event',
});

// cospCirc - participacao
db.participacao.hasOne(db.cospCirc, {
	foreignKey: 'extra_part',
	targetKey: 'part_id',
});
db.cospCirc.belongsTo(db.participacao, {
	foreignKey: 'extra_part',
	targetKey: 'part_id',
});

// cospCirc - estilo
db.estilo.hasOne(db.cospCirc, {
	foreignKey: 'extra_estil',
	targetKey: 'estil_id',
});
db.cospCirc.belongsTo(db.estilo, {
	foreignKey: 'extra_estil',
	targetKey: 'estil_id',
});

// cospDesf - participacao
db.participacao.hasOne(db.cospDesf, {
	foreignKey: 'extra_part',
	targetKey: 'part_id',
});
db.cospDesf.belongsTo(db.participacao, {
	foreignKey: 'extra_part',
	targetKey: 'part_id',
});

// cospDesf - categoria
db.categoria.hasOne(db.cospDesf, {
	foreignKey: 'extra_categ',
	targetKey: 'categ_id',
});
db.cospDesf.belongsTo(db.categoria, {
	foreignKey: 'extra_categ',
	targetKey: 'categ_id',
});

// kpopCirc - participacao
db.participacao.hasOne(db.kpopCirc, {
	foreignKey: 'extra_part',
	targetKey: 'part_id',
});
db.kpopCirc.belongsTo(db.participacao, {
	foreignKey: 'extra_part',
	targetKey: 'part_id',
});

// kpopSolo - participacao
db.participacao.hasOne(db.kpopSolo, {
	foreignKey: 'extra_part',
	targetKey: 'part_id',
});
db.kpopSolo.belongsTo(db.participacao, {
	foreignKey: 'extra_part',
	targetKey: 'part_id',
});

// kpopSolo - modalidade
db.modalidade.hasOne(db.kpopSolo, {
	foreignKey: 'extra_mod',
	targetKey: 'mod_id',
});
db.kpopSolo.belongsTo(db.modalidade, {
	foreignKey: 'extra_mod',
	targetKey: 'mod_id',
});

// nota - usuario
db.usuario.hasMany(db.nota, {
	foreignKey: 'nota_usuario',
});
db.nota.belongsTo(db.usuario, {
	foreignKey: 'nota_usuario',
});

// nota - participacao
db.participacao.hasMany(db.nota, {
	foreignKey: 'nota_part',
});
db.nota.belongsTo(db.participacao, {
	foreignKey: 'nota_part',
});

// participacao - evento
db.evento.hasMany(db.participacao, {
	foreignKey: 'part_event',
});
db.participacao.belongsTo(db.evento, {
	foreignKey: 'part_event',
});

// participacao - apresentacao
db.apresentacao.hasMany(db.participacao, {
	foreignKey: 'part_apres',
});
db.participacao.belongsTo(db.apresentacao, {
	foreignKey: 'part_apres',
});

// participacao - concurso
db.concurso.hasMany(db.participacao, {
	foreignKey: 'part_conc',
});
db.participacao.belongsTo(db.concurso, {
	foreignKey: 'part_conc',
});

// refreshToken - usuario
db.refreshToken.belongsTo(db.usuario, {
	foreignKey: 'refreshToken_usuario',
	targetKey: 'usuario_id',
});
db.usuario.hasOne(db.refreshToken, {
	foreignKey: 'refreshToken_usuario',
	targetKey: 'usuario_id',
});

// emailToken - competidor
db.emailToken.belongsTo(db.competidor, {
	foreignKey: 'emailToken_comp',
	targetKey: 'comp_id',
});
db.competidor.hasOne(db.emailToken, {
	foreignKey: 'emailToken_comp',
	targetKey: 'comp_id',
});

// usuario - cargo
db.cargo.hasMany(db.usuario, {
	foreignKey: 'usuario_cargo',
});
db.usuario.belongsTo(db.cargo, {
	foreignKey: 'usuario_cargo',
});

// Concurso - Evento
db.evento.hasMany(db.concurso, {
	foreignKey: 'conc_event',
});
db.concurso.belongsTo(db.evento, {
	foreignKey: 'conc_event',
});

export default db;
