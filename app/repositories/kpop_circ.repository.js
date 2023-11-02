import BaseRepository from './base.repository.js';

export default class KpopCircuitoRepository extends BaseRepository {
	constructor(model) {
		super(model);
		this.nome = 'Circuito Kpop';
	}

	selecionaDadosCriar(kpopCircuito) {
		const dados = {};

		dados.extra_integ = kpopCircuito.extra_integ;
		dados.extra_mat = kpopCircuito.extra_mat;
		dados.extra_link_av = kpopCircuito.extra_link_av;

		return dados;
	}
}
