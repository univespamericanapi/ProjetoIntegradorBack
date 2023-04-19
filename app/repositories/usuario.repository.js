import BaseRepository from "./base.repository.js";
import CustomError from "../helpers/customError.helper.js";

export default class UsuarioRepository extends BaseRepository {
    async buscarPorLogin(login) {
        try {
            const usuario = await this.model.findOne({
                where: {
                    usuario_login: login
                }
            });

            this.verificaRegistro(usuario);

            return usuario;
        } catch (erro) {
            throw new CustomError(
                500,
                erro.message,
            );
        }
    }
}