import BaseRepository from "./base.repository.js";

export default class ApresentacaoRepository extends BaseRepository {
    constructor(model) {
        super(model);
        this.nome = 'Apresentação';
    }

    async buscarPorCompetidor(compId) {
        try {
            const apresentacao = await this.model.findOne({
                where: {
                    apres_comp: compId
                }
            });

            return apresentacao;
        } catch (erro) {
            throw erro;
        }
    }

    selecionaDadosCriar(apresentacao) {
        const dados = {};

        dados.apres_nome = apresentacao.apres_nome;
        dados.apres_origem = apresentacao.apres_origem;
        dados.apres_link_ref = apresentacao.apres_link_ref;

        return dados;
    }
}