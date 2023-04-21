import db from "../models/db.model.js";
import EventoRepository from "../repositories/evento.repository.js";
import dataUtils from "../utils/data.util.js";

const criar = async (novo) => {
    try {
        const Evento = new EventoRepository(db.evento);

        novo.event_data = dataUtils.stringParaData(novo.event_data);
        novo.event_EdiNome = `${novo.event_edicao}º ${novo.event_nome}`;

        const resposta = await Evento.salvar(novo);

        return {
            status: 200,
            mesage: resposta
        }
    } catch (erro) {
        throw erro;
    }
};

const eventoService = {
    criar,
    listar,
    deletar,
    atualizar,
    buscarPorId,
}

export default eventoService;