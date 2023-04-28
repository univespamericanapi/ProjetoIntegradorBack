import BaseRepository from './base.repository.js';

export default class EstadoRepository extends BaseRepository {
	constructor(model) {
		super(model);
		this.nome = 'Estado';
	}
}
