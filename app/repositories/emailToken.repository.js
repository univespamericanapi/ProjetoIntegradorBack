import config from "../config/config.js";
import BaseRepository from "./base.repository.js";
import { v4 as uuidv4 } from 'uuid';

export default class EmailTokenRepository extends BaseRepository {
    buscaPorToken = async (token, competidor) => {
        try {
            const registro = await this.model.findOne({
                where: {
                    token: token,
                    emailToken_comp: competidor,
                }
            });

            return registro;
        } catch (erro) {
            throw erro;
        }
    };

    criarToken = async (competidor) => {
        try {
            const registro = {
                token: uuidv4(),
                emailToken_comp: competidor.comp_id,
            };

            await this.salvar(registro);

            return registro.token;
        } catch (erro) {
            throw erro;
        }
    };
}