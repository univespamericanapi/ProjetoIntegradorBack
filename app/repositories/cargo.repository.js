import BaseRepository from "./base.repository.js";

export default class CargoRepository extends BaseRepository {
    async buscarPorNome(nome) {
        try {
            const cargo = await this.model.findOne({
                where: {
                    cargo_nome: nome
                }
            });

            this.verificaRegistro(cargo);

            return cargo;
        } catch (erro) {
            throw erro;
        }
    }
}