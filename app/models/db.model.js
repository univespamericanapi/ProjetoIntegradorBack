import Sequelize from "sequelize";
import config from "../config/config.js";
import { apresentacao } from "./apresentacao.model.js";
import { cargo } from "./cargo.model.js";
import { categoria } from "./categoria.model.js";
import { cidade } from "./cidade.model.js";
import { competidor } from "./competidor.model.js";
import { concurso } from "./concurso.model.js";
import { cospCirc } from "./cosp_circ.model.js";
import { cospDesf } from "./cosp_desf.model.js";
import { estado } from "./estado.model.js";
import { estilo } from "./estilo.model.js";
import { evento } from "./evento.model.js";
import { kpopCirc } from "./kpop_circ.model.js";
import { kpopSolo } from "./kpop_solo.model.js";
import { modalidade } from "./modalidade.model.js";
import { nota } from "./nota.model.js";
import { participacao } from "./participacao.model.js";
import { refreshToken } from "./refreshToken.model.js";
import { usuario } from "./usuario.model.js";

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
db.apresentacao = apresentacao(sequelize, Sequelize);
db.cargo = cargo(sequelize, Sequelize);
db.categoria = categoria(sequelize, Sequelize);
db.cidade = cidade(sequelize, Sequelize);
db.competidor = competidor(sequelize, Sequelize);
db.concurso = concurso(sequelize, Sequelize);
db.cospCirc = cospCirc(sequelize, Sequelize);
db.cospDesf = cospDesf(sequelize, Sequelize);
db.estado = estado(sequelize, Sequelize);
db.estilo = estilo(sequelize, Sequelize);
db.evento = evento(sequelize, Sequelize);
db.kpopCirc = kpopCirc(sequelize, Sequelize);
db.kpopSolo = kpopSolo(sequelize, Sequelize);
db.modalidade = modalidade(sequelize, Sequelize);
db.nota = nota(sequelize, Sequelize);
db.participacao = participacao(sequelize, Sequelize);
db.refreshToken = refreshToken(sequelize, Sequelize);
db.usuario = usuario(sequelize, Sequelize);

// Database Relationships
// apresentacao - competidor
db.competidor.hasMany(db.apresentacao, {
    foreignKey: 'apres_comp'
});
db.apresentacao.belongsTo(db.competidor, {
    foreignKey: 'apres_comp'
});

// cidade - estado
db.estado.hasMany(db.cidade, {
    foreignKey: 'cid_estado'
});
db.cidade.belongsTo(db.estado, {
    foreignKey: 'cid_estado'
});

// usuario - competidor
db.usuario.hasOne(db.competidor, {
    foreignKey: 'comp_usua'
});
db.competidor.belongsTo(db.usuario, {
    foreignKey: 'comp_usua'
});

// competidor - cidade
db.cidade.hasMany(db.competidor, {
    foreignKey: 'comp_cidade'
});
db.competidor.belongsTo(db.cidade, {
    foreignKey: 'comp_cidade'
});

// concurso - evento
db.evento.hasMany(db.concurso, {
    foreignKey: 'conc_event'
});
db.concurso.belongsTo(db.evento, {
    foreignKey: 'conc_event'
});

// cospCirc - participacao
db.participacao.hasOne(db.cospCirc, {
    foreignKey: 'cosp_circ_part',
    targetKey: 'part_id'
});
db.cospCirc.belongsTo(db.participacao, {
    foreignKey: 'cosp_circ_part',
    targetKey: 'part_id'
});

// cospCirc - estilo
db.estilo.hasOne(db.cospCirc, {
    foreignKey: 'cosp_circ_estil',
    targetKey: 'estil_id'
});
db.cospCirc.belongsTo(db.estilo, {
    foreignKey: 'cosp_circ_estil',
    targetKey: 'estil_id'
});

// cospDesf - participacao
db.participacao.hasOne(db.cospDesf, {
    foreignKey: 'cosp_desf_part',
    targetKey: 'part_id'
});
db.cospDesf.belongsTo(db.participacao, {
    foreignKey: 'cosp_desf_part',
    targetKey: 'part_id'
});

// cospDesf - categoria
db.categoria.hasOne(db.cospDesf, {
    foreignKey: 'cosp_desf_categ',
    targetKey: 'categ_id'
});
db.cospDesf.belongsTo(db.categoria, {
    foreignKey: 'cosp_desf_categ',
    targetKey: 'categ_id'
});

// evento - cidade
db.cidade.hasMany(db.evento, {
    foreignKey: 'event_cidade'
});
db.evento.belongsTo(db.cidade, {
    foreignKey: 'event_cidade'
});

// kpopCirc - participacao
db.participacao.hasOne(db.kpopCirc, {
    foreignKey: 'kpop_circ_part',
    targetKey: 'part_id'
});
db.kpopCirc.belongsTo(db.participacao, {
    foreignKey: 'kpop_circ_part',
    targetKey: 'part_id'
});

// kpopSolo - participacao
db.participacao.hasOne(db.kpopSolo, {
    foreignKey: 'kpop_solo_part',
    targetKey: 'part_id'
});
db.kpopSolo.belongsTo(db.participacao, {
    foreignKey: 'kpop_solo_part',
    targetKey: 'part_id'
});

// kpopSolo - modalidade
db.modalidade.hasOne(db.kpopSolo, {
    foreignKey: 'kpop_solo_mod',
    targetKey: 'mod_id'
});
db.kpopSolo.belongsTo(db.modalidade, {
    foreignKey: 'kpop_solo_mod',
    targetKey: 'mod_id'
});

// nota - usuario
db.usuario.hasMany(db.nota, {
    foreignKey: 'nota_usuario'
});
db.nota.belongsTo(db.usuario, {
    foreignKey: 'nota_usuario'
});

// nota - participacao
db.participacao.hasMany(db.nota, {
    foreignKey: 'nota_part'
});
db.nota.belongsTo(db.participacao, {
    foreignKey: 'nota_part'
});

// participacao - evento
db.evento.hasMany(db.participacao, {
    foreignKey: 'part_event'
});
db.participacao.belongsTo(db.evento, {
    foreignKey: 'part_event'
});

// participacao - apresentacao
db.apresentacao.hasMany(db.participacao, {
    foreignKey: 'part_apres'
});
db.participacao.belongsTo(db.apresentacao, {
    foreignKey: 'part_apres'
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

// usuario - cargo
db.cargo.hasMany(db.usuario, {
    foreignKey: 'usuario_cargo'
});
db.usuario.belongsTo(db.cargo, {
    foreignKey: 'usuario_cargo'
});






// // Participantes - Personagens
// db.participante.hasMany(db.personagem, {
//     foreignKey: 'pers_part'
// });
// db.personagem.belongsTo(db.participante, {
//     foreignKey: 'pers_part'
// });



// // Desfile - Categoria
// db.categoria.hasMany(db.desfile, {
//     foreignKey: 'desf_categ'
// });
// db.desfile.belongsTo(db.categoria, {
//     foreignKey: 'desf_categ'
// });







// Concurso - Evento
db.evento.hasMany(db.concurso, {
    foreignKey: 'conc_event'
});
db.concurso.belongsTo(db.evento, {
    foreignKey: 'conc_event'
});

export default db;