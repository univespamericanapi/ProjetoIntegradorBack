import db from '../models/db.model.js';
import BaseRepository from './base.repository.js';

export default class CidadeRepository extends BaseRepository {
	constructor(model) {
		super(model);
		this.nome = 'Cidade';
	}

	async listarPorEstado(estadoId) {
		try {
			const cidades = await this.model.findAll({
				where: {
					cid_estado: estadoId,
				},
				attributes: ['cid_id', 'cid_desc'],
				include: {
					model: db.estado,
					attributes: ['est_sigla', 'est_desc'],
				},
				order: [['cid_desc', 'ASC']],
			});

			return cidades;
		} catch (erro) {
			console.error(erro);
			throw erro;
		}
	}
}
