import BaseRepository from "./base.repository.js";
import CustomError from "../helpers/customError.helper.js";
import { mensagensConstant } from "../constants/mensagens.constant.js";

export default class EventoRepository extends BaseRepository {
    async salvar(registro) {
        try {
            await this.checaEventoExiste(registro.event_ed_nome);

            return await this.model.create(registro).then(() => {
                return this.nomeModel + mensagensConstant.registroCriado
            });
        } catch (erro) {
            throw erro;
        }
    }

    async checaEventoExiste(edNome) {
        try {
            const evento = await this.model.findOne({
                where: {
                    event_ed_nome: edNome
                }
            });

            if (evento) {
                throw new CustomError(
                    400,
                    mensagensConstant.eventoJaCadastrado,
                );
            }
        } catch (erro) {
            throw erro;
        }
    }
}