import BaseRepository from "./base.repository.js";

export default class CosplayDesfileRepository extends BaseRepository {
    constructor(model) {
        super(model);
        this.nome = 'Desfile Cosplay';
    }

    selecionaDadosCriar(cospDesfile) {
        const dados = {};

        dados.extra_categ = cospDesfile.extra_categ;

        return dados;
    }
}