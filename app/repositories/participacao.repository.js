import BaseRepository from './base.repository.js';
import consoleError from "../utils/consoleError.util.js";

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
			consoleError(erro);
			throw erro;
		}
	}

	async contarPorEvento(eventId) {
		try {
			const contagem = await this.model.count({
				where: {
					part_event: eventId,
				},
			});

			return contagem;
		} catch (erro) {
			consoleError(erro);
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
			consoleError(erro);
			throw erro;
		}
	}

	async buscarEventoAgruparConcurso(eventoId, db) {
		try {
			const participacoes = await this.model.findAll({
				attributes: [
					'part_conc',
					[db.sequelize.fn('COUNT', db.sequelize.col('part_conc')), 'num_comp'],
				],
				raw: true,
				where: {
					part_event: eventoId,
				},
				include: {
					model: db.concurso,
					attributes: ['conc_nome'],
				},
				group: 'part_conc',
			});

			return participacoes;
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
