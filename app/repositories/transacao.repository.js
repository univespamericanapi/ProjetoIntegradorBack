export default class TransacaoRepository {
	constructor(sequelize) {
		this.sequelize = sequelize;
	}

	async iniciar() {
		try {
			return await this.sequelize.transaction();
		} catch (erro) {
			console.error(erro);
			throw erro;
		}
	}

	async buscarOuCriar(model, where, defaults, transaction) {
		try {
			return await model
				.findOrCreate({
					where: where,
					defaults: defaults,
					transaction,
				})
				.then(([registro, criado]) => {
					return registro;
				});
		} catch (erro) {
			console.error(erro);
			throw erro;
		}
	}

	async atualizar(model, where, updates, transaction) {
		try {
			return await model.update(updates, { where: where }, { transaction });
		} catch (erro) {
			console.error(erro);
			throw erro;
		}
	}

	async criar(model, data, transaction) {
		try {
			return await model.create(data, { transaction });
		} catch (erro) {
			console.error(erro);
			throw erro;
		}
	}

	async incrementar(registry, field, transaction) {
		try {
			await registry.increment(field, { transaction });
		} catch (erro) {
			console.error(erro);
			throw erro;
		}
	}

	async finalizar(transaction) {
		try {
			await transaction.commit();
		} catch (erro) {
			transaction.rollback();
			throw erro;
		}
	}
}
