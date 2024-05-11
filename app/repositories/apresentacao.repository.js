import BaseRepository from './base.repository.js';
import consoleError from "../utils/consoleError.util.js";

export default class ApresentacaoRepository extends BaseRepository {
	constructor(model) {
		super(model);
		this.nome = 'Apresentação';
	}

	async buscarPorCompetidor(compId) {
		try {
			const apresentacao = await this.model.findOne({
				where: {
					apres_comp: compId,
				},
			});

			return apresentacao;
		} catch (erro) {
			consoleError(erro);
			throw erro;
		}
	}

	async buscarPartAgruparTema(concId, db) {
		try {
			const apresentacoes = await this.model.findAll({
				attributes: [
					'apres_nome',
					[db.sequelize.fn('COUNT', db.sequelize.col('apres_nome')), 'num_tema'],
				],
				include: [{
					model: db.participacao,
					attributes: [],
					where: { part_conc: concId },
					as: 'participacao'
				}],
				group: ['apres_nome'],
				raw: true
			});

			return apresentacoes;
		} catch (erro) {
			console.error(erro);
			throw erro;
		}
	}

	selecionaDadosCriar(apresentacao) {
		const dados = {};

		dados.apres_nome = apresentacao.apres_nome;
		dados.apres_origem = apresentacao.apres_origem;
		dados.apres_link_ref = apresentacao.apres_link_ref;

		return dados;
	}
}
