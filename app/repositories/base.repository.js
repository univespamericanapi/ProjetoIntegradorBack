import { mensagensConstant } from "../constants/mensagens.constant.js";
import CustomError from "../helpers/customError.helper.js";

export default class BaseRepository {
    constructor(m) {
        this.model = m;
    }

    async salvar(registro) {
        try {
            await this.model.create(registro).then(() => {
                return {
                    status: 201,
                    message: mensagensConstant.registroNovo +
                    this.model.getTableName() +
                    "!"
                };
            });
        } catch (erro) {
            throw erro;
        }
    }

    async buscarTodos() {
        try {
            return await this.model.findAll();
        } catch (erro) {
            throw erro;
        }
    }

    async buscarPorId(id) {
        try {
            const registro = await this.model.findByPk(id);

            if (!registro) {
                throw new CustomError(
                    400,
                    mensagensConstant.registroNaoEncontrado +
                    this.model.getTableName() +
                    "!"
                );
            }

            return registro;
        } catch (erro) {
            throw erro;
        }
    }

    async deletarPorId(id) {
        try {
            const registro = await this.buscarPorId(id);

            return await registro.destroy().then(() => {
                return {
                    status: 202,
                    message: mensagensConstant.registroDeletado +
                    this.model.getTableName() +
                    "!"
                };
            });
        } catch (erro) {
            throw erro;
        }
    }

    async atualizarPorId(id, alteracoes) {
        try {
            const registro = await this.buscarPorId(id);

            return await registro.update(alteracoes).then(() => {
                return {
                    status: 202,
                    message: mensagensConstant.registroAtualizado +
                    this.model.getTableName() +
                    "!"
                };
            });
        } catch (erro) {
            throw erro;
        }
    }

    async contarTodos() {
        try {
            return await this.model.count();
        } catch (erro) {
            throw erro;
        }
    }
}