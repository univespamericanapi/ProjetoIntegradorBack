import BaseRepository from "./base.repository.js";

export default class UsuarioRepository extends BaseRepository {
    async buscarPorLogin(login) {
        try {
            return await this.model.findOne({
                where: {
                    usuario_login: login
                }
            });
        } catch (erro) {
            throw erro;
        }
    }
}