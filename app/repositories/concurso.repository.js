import BaseRepository from './base.repository.js';
import consoleError from "../utils/consoleError.util.js";

export default class ConcursoRepository extends BaseRepository {
	constructor(model) {
		super(model);
		this.nome = 'Concurso';
	}

	async buscarPorEvento(idEvento) {
		try {
			return await this.model.findAll({
				where: {
					conc_event: idEvento,
				},
			});
		} catch (erro) {
			consoleError(erro);
			throw erro;
		}
	}

	async buscarPorNome(nome) {
		try {
			return await this.model.findAll({
				where: {
					conc_nome: nome,
				},
			});
		} catch (erro) {
			consoleError(erro);
			throw erro;
		}
	}

	async buscarPorEventoAtivo(idEvento) {
		try {
			return await this.model.findAll({
				where: {
					conc_event: idEvento,
					conc_ativo: true,
				},
			});
		} catch (erro) {
			consoleError(erro);
			throw erro;
		}
	}

	async buscarCospCirc(idEvento) {
		try {
			return await this.model.findOne({
				where: {
					conc_event: idEvento,
					conc_nome: 'Cosplay Circuito',
				},
			});
		} catch (erro) {
			consoleError(erro);
			throw erro;
		}
	}

	async buscarCospDesf(idEvento) {
		try {
			return await this.model.findOne({
				where: {
					conc_event: idEvento,
					conc_nome: 'Cosplay Desfile',
				},
			});
		} catch (erro) {
			consoleError(erro);
			throw erro;
		}
	}

	async buscarKaraoke(idEvento) {
		try {
			return await this.model.findOne({
				where: {
					conc_event: idEvento,
					conc_nome: 'Karaoke',
				},
			});
		} catch (erro) {
			consoleError(erro);
			throw erro;
		}
	}

	async buscarKpopCirc(idEvento) {
		try {
			return await this.model.findOne({
				where: {
					conc_event: idEvento,
					conc_nome: 'Kpop Circuito',
				},
			});
		} catch (erro) {
			consoleError(erro);
			throw erro;
		}
	}

	async buscarKpopSolo(idEvento) {
		try {
			return await this.model.findOne({
				where: {
					conc_event: idEvento,
					conc_nome: 'Kpop Solo / Duo',
				},
			});
		} catch (erro) {
			consoleError(erro);
			throw erro;
		}
	}

	async idNomeView(concurso) {
		try {
			return {
				conc_id: concurso.conc_id,
				conc_nome: concurso.conc_nome,
			};
		} catch (erro) {
			consoleError(erro);
			throw erro;
		}
	}
}
