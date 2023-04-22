import BaseRepository from "./base.repository.js";

export default class ConcursoRepository extends BaseRepository {
    async buscarPorEvento(idEvento) {
        try {
            return await this.model.findAll({
                where: {
                    conc_event: idEvento
                }
            });
        } catch (erro) {
            throw erro;
        }
    }
}