import BaseRepository from './base.repository.js';

export default class KpopSoloDuoRepository extends BaseRepository {
	constructor(model) {
		super(model);
		this.nome = 'Kpop Solo / Duo';
	}

	selecionaDadosCriar(kpopSolo) {
		const dados = {};

		dados.extra_integ = kpopSolo.extra_integ;
		dados.extra_mod = kpopSolo.extra_mod;
		dados.extra_link_av = kpopSolo.extra_link_av;

		return dados;
	}
}
