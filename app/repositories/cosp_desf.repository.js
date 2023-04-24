import BaseRepository from "./base.repository.js";

export default class CosplayDesfileRepository extends BaseRepository {
    selecionaDadosCriar(cospDesfile) {
        const dados = {};

        dados.extra_categ = cospDesfile.extra_categ;

        return dados;
    }
}