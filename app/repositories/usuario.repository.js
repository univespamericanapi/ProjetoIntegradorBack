import BaseRepository from "./base.repository.js";
import CustomError from "../helpers/customError.helper.js";
import { mensagensConstant } from "../constants/mensagens.constant.js";

export default class UsuarioRepository extends BaseRepository {
    async buscarPorLogin(login) {
        try {
            const usuario = await this.model.findOne({
                where: {
                    usuario_login: login
                }
            });

            return usuario;
        } catch (erro) {
            throw erro;
        }
    }

    async salvar(registro) {
        try {
            await this.checaUsuarioExiste(registro.usuario_login);

            return await this.model.create(registro).then(() => {
                return this.nomeModel + mensagensConstant.registroCriado
            });
        } catch (erro) {
            throw erro;
        }
    }

    async atualizarPorId(id, alteracoes) {
        try {
            const registro = await this.buscarPorId(id);

            return await registro.update(alteracoes).then(() => {
                return this.nomeModel + mensagensConstant.registroAtualizado
            });
        } catch (erro) {
            throw erro;
        }
    }

    async checaUsuarioExiste(login) {
        try {
            const usuario = await this.model.findOne({
                where: {
                    usuario_login: login
                }
            });

            if (usuario) {
                throw new CustomError(
                    400,
                    mensagensConstant.usuarioJaCadastrado,
                );
            }
        } catch (erro) {
            throw erro;
        }
    }
}