import BaseRepository from "./base.repository.js";

export default class EmailTokenRepository extends BaseRepository {
    constructor(model) {
        super(model);
        this.nome = 'Token de Ativação';
    }

    buscaPorToken = async (id, token) => {
        try {
            const registro = await this.model.findOne({
                where: {
                    token: token,
                    emailToken_comp: id,
                }
            });

            return registro;
        } catch (erro) {
            console.error(erro);
            throw erro;
        }
    };

    buscaPorCompetidor = async (idComp) => {
        try {
            const registro = await this.model.findOne({
                where: {
                    emailToken_comp: idComp,
                }
            });

            return registro;
        } catch (erro) {
            console.error(erro);
            throw erro;
        }
    };
}