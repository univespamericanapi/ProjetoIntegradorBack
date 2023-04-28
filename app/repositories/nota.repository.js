import BaseRepository from './base.repository.js';

export default class NotaRepository extends BaseRepository {
	constructor(model) {
		super(model);
		this.nome = 'Nota';
	}
}
