import BaseRepository from "./base.repository.js";
import { mensagensConstant } from "../constants/mensagens.constant.js";

export default class UsuarioRepository extends BaseRepository {
    constructor(model) {
        super(model);
        this.nome = 'Usuário';
    }

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

    async buscarTodos() {
        try {
            return await this.model.findAll({
                attributes: {
                    exclude: ['usuario_senha'],
                },
            });
        } catch (erro) {
            throw erro;
        }
    }

    async atualizarPorId(id, alteracoes) {
        try {
            const registro = await this.buscarPorId(id);

            return await registro.update(alteracoes).then(() => {
                return this.nome + mensagensConstant.registroAtualizado
            });
        } catch (erro) {
            throw erro;
        }
    }

    async usuarioView(usuario) {
        try {
            return {
                usuario_id: usuario.usuario_id,
                usuario_login: usuario.usuario_login,
                usuario_nome: usuario.usuario_nome,
                cargo: await usuario.getCargo(),
            };
        } catch (erro) {
            throw erro;
        }
    }
}