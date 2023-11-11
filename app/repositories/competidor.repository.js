import BaseRepository from './base.repository.js';

export default class CompetidorRepository extends BaseRepository {
	constructor(model) {
		super(model);
		this.nome = 'Competidor';
	}

	async buscarPorCpf(cpf) {
		try {
			const competidor = await this.model.findOne({
				where: {
					comp_cpf: cpf,
				},
			});

			return competidor;
		} catch (erro) {
			console.error(erro);
			throw erro;
		}
	}

	async buscarPorCpfNasc(cpf, nasc) {
		try {
			const competidor = await this.model.findOne({
				where: {
					comp_cpf: cpf,
					comp_nasc: nasc,
				},
			});

			return competidor;
		} catch (erro) {
			console.error(erro);
			throw erro;
		}
	}

	async buscarPorEmail(email) {
		try {
			const competidor = await this.model.findOne({
				where: {
					comp_email: email,
				},
			});

			return competidor;
		} catch (erro) {
			console.error(erro);
			throw erro;
		}
	}

	async buscarPorEvento(eventoId, db) {
		try {
			const competidores = await this.model.findAll({
				include: [{
					model: db.apresentacao,
					include: [{
						model: db.participacao,
						where: {
							part_event: eventoId,
						},
						required: true,
						as: 'participacao',
					}],
					required: true,
					as: 'apresentacao',
				}],
			});

			return competidores;
		} catch (erro) {
			console.error(erro);
			throw erro;
		}
	}

	async buscarEventoAgruparCidade(eventoId, db) {
		try {
			const competidores = await this.model.findAll({
				attributes: [
					'comp_cidade',
					[db.sequelize.fn('COUNT', db.sequelize.col('comp_cidade')), 'num_comp']
				],
				raw: true,
				include: {
					model: db.apresentacao,
					attributes: [],
					include: {
						model: db.participacao,
						attributes: [],
						where: {
							part_event: eventoId,
						},
						required: true,
						as: 'participacao',
					},
					required: true,
					as: 'apresentacao',
				},
				group: ['comp_cidade'],

			});

			return competidores;
		} catch (erro) {
			console.error(erro);
			throw erro;
		}
	}

	selecionaDadosCriar(competidor) {
		const dados = {};

		dados.comp_email = competidor.comp_email;
		dados.comp_nome = competidor.comp_nome;
		dados.comp_nome_social = competidor.comp_nome_social;
		dados.comp_cpf = competidor.comp_cpf;
		dados.comp_nasc = competidor.comp_nasc;
		dados.comp_whats = competidor.comp_whats;
		dados.comp_cidade = competidor.comp_cidade;

		return dados;
	}
}
