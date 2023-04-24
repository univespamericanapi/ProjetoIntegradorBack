import BaseRepository from "./base.repository.js";

export default class KpopCircuitoRepository extends BaseRepository {
    constructor(model) {
        super(model);
        this.nome = 'Circuito Kpop';
    }
}