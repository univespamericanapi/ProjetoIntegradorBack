import BaseRepository from './base.repository.js';

export default class ModalidadeRepository extends BaseRepository {
	constructor(model) {
		super(model);
		this.nome = 'Modalidade';
	}
}
