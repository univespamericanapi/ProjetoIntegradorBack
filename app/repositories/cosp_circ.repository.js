import BaseRepository from './base.repository.js';

export default class CosplayCircuitoRepository extends BaseRepository {
	constructor(model) {
		super(model);
		this.nome = 'Circuito Cosplay';
	}
}
