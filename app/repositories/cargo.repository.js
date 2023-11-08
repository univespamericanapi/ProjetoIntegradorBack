import BaseRepository from './base.repository.js';
import consoleError from "../utils/consoleError.util.js";

export default class CargoRepository extends BaseRepository {
	constructor(model) {
		super(model);
		this.nome = 'Cargo';
	}

	async buscarPorNome(nome) {
		try {
			const cargo = await this.model.findOne({
				where: {
					cargo_nome: nome,
				},
			});

			return cargo;
		} catch (erro) {
			consoleError(erro);
			throw erro;
		}
	}
}
