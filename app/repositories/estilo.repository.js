import BaseRepository from './base.repository.js';

export default class EstiloRepository extends BaseRepository {
	constructor(model) {
		super(model);
		this.nome = 'Estilo';
	}
}
