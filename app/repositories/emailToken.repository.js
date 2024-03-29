import BaseRepository from './base.repository.js';
import consoleError from "../utils/consoleError.util.js";

export default class EmailTokenRepository extends BaseRepository {
	constructor(model) {
		super(model);
		this.nome = 'Token de Ativação';
	}

	buscaPorToken = async (id, token) => {
		try {
			const registro = await this.model.findOne({
				where: {
					token: token,
					emailToken_comp: id,
				},
			});

			return registro;
		} catch (erro) {
			consoleError(erro);
			throw erro;
		}
	};

	buscaPorCompetidor = async (idComp) => {
		try {
			const registro = await this.model.findOne({
				where: {
					emailToken_comp: idComp,
				},
			});

			return registro;
		} catch (erro) {
			consoleError(erro);
			throw erro;
		}
	};
}
