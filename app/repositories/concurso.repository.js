import BaseRepository from "./base.repository.js";

export default class ConcursoRepository extends BaseRepository {
    async buscarPorEvento(idEvento) {
        try {
            return await this.model.findAll({
                where: {
                    conc_event: idEvento
                }
            });
        } catch (erro) {
            throw erro;
        }
    }

    async buscarCospCirc(idEvento) {
        try {
            return await this.model.findOne({
                where: {
                    conc_event: idEvento,
                    conc_nome: 'Cosplay Circuito',
                }
            });
        } catch (erro) {
            throw erro;
        }
    }

    async buscarCospDesf(idEvento) {
        try {
            return await this.model.findOne({
                where: {
                    conc_event: idEvento,
                    conc_nome: 'Cosplay Desfile',
                }
            });
        } catch (erro) {
            throw erro;
        }
    }

    async buscarCospCirc(idEvento) {
        try {
            return await this.model.findOne({
                where: {
                    conc_event: idEvento,
                    conc_nome: 'Karaoke',
                }
            });
        } catch (erro) {
            throw erro;
        }
    }

    async buscarKpopCirc(idEvento) {
        try {
            return await this.model.findOne({
                where: {
                    conc_event: idEvento,
                    conc_nome: 'Kpop Circuito',
                }
            });
        } catch (erro) {
            throw erro;
        }
    }

    async buscarKpopSolo(idEvento) {
        try {
            return await this.model.findOne({
                where: {
                    conc_event: idEvento,
                    conc_nome: 'Kpop Solo / Duo',
                }
            });
        } catch (erro) {
            throw erro;
        }
    }
}