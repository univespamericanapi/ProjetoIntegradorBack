import BaseRepository from './base.repository.js';
import db from '../models/db.model.js';

export default class EventoRepository extends BaseRepository {
	constructor(model) {
		super(model);
		this.nome = 'Evento';
	}

	async buscaPorEdNome(edNome) {
		try {
			return await this.model.findOne({
				where: {
					event_ed_nome: edNome,
				},
				attributes: {
					exclude: ['event_cidade'],
				},
				include: {
					model: db.cidade,
					attributes: ['cid_desc'],
					include: {
						model: db.estado,
						attributes: ['est_sigla', 'est_desc'],
					},
				},
			});
		} catch (erro) {
			console.error(erro);
			throw erro;
		}
	}

	async buscarTodos() {
		try {
			return await this.model.findAll({
				attributes: {
					exclude: ['event_cidade'],
				},
				include: {
					model: db.cidade,
					attributes: ['cid_desc'],
					include: {
						model: db.estado,
						attributes: ['est_sigla', 'est_desc'],
					},
				},
				order: [['event_data', 'DESC']],
			});
		} catch (erro) {
			console.error(erro);
			throw erro;
		}
	}

	async buscarPorId(id) {
		try {
			return await this.model.findByPk(id, {
				attributes: {
					exclude: ['event_cidade'],
				},
				include: {
					model: db.cidade,
					attributes: ['cid_desc'],
					include: {
						model: db.estado,
						attributes: ['est_sigla', 'est_desc'],
					},
				},
				order: [['event_data', 'DESC']],
			});
		} catch (erro) {
			console.error(erro);
			throw erro;
		}
	}

	async idNomeView(evento) {
		try {
			return {
				event_id: evento.event_id,
				event_ed_nome: evento.event_ed_nome,
			};
		} catch (erro) {
			console.error(erro);
			throw erro;
		}
	}
}
