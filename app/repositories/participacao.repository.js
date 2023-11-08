import BaseRepository from './base.repository.js';

export default class ParticipacaoRepository extends BaseRepository {
	constructor(model) {
		super(model);
		this.nome = 'Participação';
	}

	async buscarPorApresentacao(apresId, eventId) {
		try {
			const participacao = await this.model.findOne({
				where: {
					part_apres: apresId,
					part_event: eventId,
				},
			});

			return participacao;
		} catch (erro) {
			console.error(erro);
			throw erro;
		}
	}

	async buscaPorConcurso(concId) {
		try {
			const participacao = await this.model.findAll({
				where: {
					part_conc: concId,
				},
			});

			return participacao;
		} catch (erro) {
			console.error(erro);
			throw erro;
		}
	}

	selecionaDadosCriar(participacao) {
		const dados = {};

		dados.part_conc = participacao.part_conc;
		dados.part_event = participacao.part_event;
		dados.part_aceit_regul = participacao.part_aceit_regul;
		dados.part_checkin = false;
		dados.part_tipo_inscr = participacao.part_tipo_inscr;

		return dados;
	}
}
