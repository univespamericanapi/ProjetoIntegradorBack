import BaseRepository from './base.repository.js';
import consoleError from "../utils/consoleError.util.js";

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
			});
		} catch (erro) {
			consoleError(erro);
			throw erro;
		}
	}

	async buscarTodos() {
		try {

			return await this.model.findAll({
				order: [['event_data', 'DESC']],
			});
		} catch (erro) {
			consoleError(erro);
			throw erro;
		}
	}

	async buscarPorId(id) {
		try {
			return await this.model.findByPk(id, {
				// include: {
				// 	model: db.cidade,
				// 	attributes: {
				// 		exclude: ['cid_id'],
				// 	},
				// 	include: {
				// 		model: db.estado,
				// 		attributes: ['est_sigla', 'est_desc'],
				// 	},
				// },
				order: [['event_data', 'DESC']],
			});
		} catch (erro) {
			consoleError(erro);
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
			consoleError(erro);
			throw erro;
		}
	}
}
