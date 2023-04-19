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
                    message: mensagensConstant.registroNovo
                };
            }).catch(erro => {
                throw erro;
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
            return await this.model.findByPk(id);
        } catch (erro) {
            throw erro;
        }
    }

    async deletarPorId(id) {
        try {
            const registro = await this.buscarPorId(id);

            if (!registro) {
                // throw new Error(mensagensConstant.registroNaoEncontrado);
                throw new CustomError(400, mensagensConstant.registroNaoEncontrado);
            }

            return await registro.destroy().then(() => {
                return {
                    status: 202,
                    message: mensagensConstant.registroDeletado
                };
            }).catch(erro => {
                throw erro;
            });
        } catch (erro) {
            throw erro;
        }
    }

    async updateById(id, alteracoes) {
        try {
            const registro = await this.buscarPorId(id);

            if (!registro) {
                throw new Error(mensagensConstant.registroNaoEncontrado);
            }

            await registro.update(alteracoes).then(() => {
                return {
                    status: 202,
                    message: mensagensConstant.registroAtualizado
                };
            }).catch(erro => {
                throw erro;
            });;
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