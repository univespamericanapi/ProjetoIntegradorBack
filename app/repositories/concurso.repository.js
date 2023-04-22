import BaseRepository from "./base.repository.js";

export default class ConcursoRepository extends BaseRepository {
    async buscarPorEvento(idEvento) {
        try {
            return await Config.findAll({
                where: {
                    config_event: idEvento
                }
            });
        } catch (erro) {
            throw erro;
        }
    }
}