import BaseRepository from "./base.repository.js";

export default class CategoriaRepository extends BaseRepository {
    constructor(model) {
        super(model);
        this.nome = 'Categoria';
    }
}