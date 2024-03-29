import config from '../config/config.js';
import BaseRepository from './base.repository.js';
import { v4 as uuidv4 } from 'uuid';
import consoleError from "../utils/consoleError.util.js";

export default class RefreshTokenRepository extends BaseRepository {
	constructor(model) {
		super(model);
		this.nome = 'Refresh Token';
	}

	buscaPorToken = async (token) => {
		try {
			const registro = await this.model.findOne({
				where: {
					token: token,
				},
			});

			return registro;
		} catch (erro) {
			consoleError(erro);
			throw erro;
		}
	};

	criarToken = async (usuario) => {
		try {
			const expiredAt = new Date();

			expiredAt.setSeconds(expiredAt.getSeconds() + config.jwtExpira);

			const registro = {
				token: uuidv4(),
				refreshToken_usuario: usuario.usuario_id,
				expiryDate: expiredAt.getTime(),
			};

			await this.salvar(registro);

			return registro.token;
		} catch (erro) {
			consoleError(erro);
			throw erro;
		}
	};

	verificaExpirado = async (token) => {
		return (await token.expiryDate.getTime()) < new Date().getTime();
	};
}
