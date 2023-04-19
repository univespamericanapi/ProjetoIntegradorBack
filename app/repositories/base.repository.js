import { mensagensConstant } from "../constants/mensagens.constant.js";
import CustomError from "../helpers/customError.helper.js";

export default class BaseRepository {
    constructor(m) {
        this.model = m;
        this.nomeModel = this.pegarNomeModel();
    }

    async salvar(registro) {
        try {
            return await this.model.create(registro).then(() => {
                return {
                    status: 201,
                    message: this.nomeModel + mensagensConstant.registroCriado,
                };
            });
        } catch (erro) {
            throw new CustomError(
                500,
                erro.message,
            );
        }
    }

    async buscarTodos() {
        try {
            return await this.model.findAll();
        } catch (erro) {
            throw new CustomError(
                500,
                erro.message,
            );
        }
    }

    async buscarPorId(id) {
        try {
            const registro = await this.model.findByPk(id);

            verificaRegistro(registro);

            return registro;
        } catch (erro) {
            throw new CustomError(
                500,
                erro.message,
            );
        }
    }

    async deletarPorId(id) {
        try {
            const registro = await this.buscarPorId(id);

            return await registro.destroy().then(() => {
                return {
                    status: 202,
                    message: this.nomeModel + mensagensConstant.registroDeletado,
                };
            });
        } catch (erro) {
            throw new CustomError(
                500,
                erro.message,
            );
        }
    }

    async atualizarPorId(id, alteracoes) {
        try {
            const registro = await this.buscarPorId(id);

            return await registro.update(alteracoes).then(() => {
                return {
                    status: 202,
                    message: this.nomeModel + mensagensConstant.registroAtualizado,
                };
            });
        } catch (erro) {
            throw new CustomError(
                500,
                erro.message,
            );
        }
    }

    async contarTodos() {
        try {
            return await this.model.count();
        } catch (erro) {
            throw new CustomError(
                500,
                erro.message,
            );
        }
    }

    pegarNomeModel() {
        const nomeTabela = this.model.getTableName();
        return nomeTabela.charAt(0).toUpperCase() + nomeTabela.slice(1, -1);
    }

    verificaRegistro(registro) {
        if (!registro) {
            throw new CustomError(
                400,
                this.nomeModel + mensagensConstant.registroNaoEncontrado,
            );
        }
    }
}