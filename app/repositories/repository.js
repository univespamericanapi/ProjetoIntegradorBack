import sequelize from "sequelize";
import { mensagensConstant } from "../constants/mensagens.constant.js";

export default class Repository {
    constructor(m) {
        this.model = m;
    }

    async salvar(objeto) {
        try {
            await this.model.create(objeto).then(() => {
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

    async deleteById(id) {
        try {
            const registro = await this.buscarPorId(id);

            if (!registro) {
                throw new Error(mensagensConstant.registroNaoEncontrado);
            }

            await registro.destroy().then(() => {
                return {
                    status: 202,
                    message: mensagensConstant.registroDeletado
                };
            }).catch(erro => {
                throw erro;
            });;
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
}