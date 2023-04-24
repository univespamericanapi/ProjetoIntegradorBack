import BaseRepository from "./base.repository.js";

export default class EmailTokenRepository extends BaseRepository {
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
            throw erro;
        }
    };
}