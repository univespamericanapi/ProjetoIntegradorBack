import { mensagensConstant } from "../constants/mensagens.constant.js";

export default class BaseRepository {
    constructor(m) {
        this.model = m;
    }

    async salvar(registro) {
        try {
            return await this.model.create(registro).then(() => {
                return this.nome + mensagensConstant.registroCriado
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

            return registro;
        } catch (erro) {
            throw erro;
        }
    }

    async deletarPorId(id) {
        try {
            const registro = await this.buscarPorId(id);

            return await registro.destroy().then(() => {
                return this.nome + mensagensConstant.registroDeletado
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

    async contarTodos() {
        try {
            return await this.model.count();
        } catch (erro) {
            throw erro;
        }
    }

    pegarNomeModel() {
        const nomeTabela = this.model.getTableName();
        return nomeTabela.charAt(0).toUpperCase() + nomeTabela.slice(1, -1);
    }
}