import BaseRepository from './base.repository.js';

export default class CosplayCircuitoRepository extends BaseRepository {
	constructor(model) {
		super(model);
		this.nome = 'Circuito Cosplay';
	}

	selecionaDadosCriar(cospCircuito) {
		const dados = {};

		dados.extra_integ = cospCircuito.extra_integ;
		dados.extra_estil = cospCircuito.extra_estil;
		dados.extra_link_av = cospCircuito.extra_link_av;

		return dados;
	}
}
