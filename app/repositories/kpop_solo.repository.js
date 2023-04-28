import BaseRepository from './base.repository.js';

export default class KpopSoloDuoRepository extends BaseRepository {
	constructor(model) {
		super(model);
		this.nome = 'Kpop Solo / Duo';
	}
}
