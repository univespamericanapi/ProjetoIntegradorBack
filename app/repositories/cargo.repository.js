import BaseRepository from "./base.repository.js";

export default class CargoRepository extends BaseRepository {
    async buscarPorNome(nome) {
        try {
            return await this.model.findOne({
                where: {
                    cargo_nome: nome
                }
            });
        } catch (erro) {
            throw erro;
        }
    }
}