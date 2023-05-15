import verifica from '../helpers/verificacao.helper.js';
import db from '../models/db.model.js';
import EventoRepository from '../repositories/evento.repository.js';
import dataUtils from '../utils/data.util.js';

const criar = async (novo) => {
	try {
		const Evento = new EventoRepository(db.evento);

		novo.event_data = dataUtils.stringParaData(novo.event_data);
		novo.event_ed_nome = `${novo.event_edicao}º ${novo.event_nome}`;

		const evento = await Evento.buscaPorEdNome(novo.event_ed_nome);

		verifica.registroDuplicado(evento, Evento.nome);

		const resposta =
			(await Evento.salvar(novo)) +
			' Não esqueça de ir na seção "Configurar Concursos" para habilitar os concursos do evento criado.';

		return {
			status: 201,
			message: resposta,
		};
	} catch (erro) {
		console.error(erro);
		throw erro;
	}
};

const listar = async () => {
	try {
		const Evento = new EventoRepository(db.evento);

		const eventos = await Evento.buscarTodos();

		verifica.registroExiste(eventos, Evento.nome);

		return {
			status: 200,
			message: eventos,
		};
	} catch (erro) {
		console.error(erro);
		throw erro;
	}
};

const deletar = async (idEvento) => {
	try {
		const Evento = new EventoRepository(db.evento);

		const evento = await Evento.buscarPorId(idEvento);

		verifica.registroExiste(evento, Evento.nome);

		const resposta = await Evento.deletarPorId(idEvento);

		return {
			status: 202,
			message: resposta,
		};
	} catch (erro) {
		console.error(erro);
		throw erro;
	}
};

const atualizar = async (idEvento, alteracao) => {
	try {
		const Evento = new EventoRepository(db.evento);

		verifica.faltaParametro(idEvento);

		const evento = await Evento.buscarPorId(idEvento);

		verifica.registroExiste(evento, Evento.nome);

		if (alteracao.event_nome || alteracao.event_edicao) {
			alteracao.event_ed_nome = `${alteracao.event_edicao}º ${alteracao.event_nome}`;

			const evento2 = await Evento.buscaPorEdNome(alteracao.event_ed_nome);

			verifica.registroDuplicado(evento2, Evento.nome);
		}

		if (alteracao.event_data) {
			alteracao.event_data = dataUtils.stringParaData(alteracao.event_data);
		}

		const resposta = await Evento.atualizarPorId(idEvento, alteracao);

		return {
			status: 202,
			message: resposta,
		};
	} catch (erro) {
		console.error(erro);
		throw erro;
	}
};

const buscarPorId = async (idEvento) => {
	try {
		const Evento = new EventoRepository(db.evento);

		verifica.faltaParametro(idEvento);

		const evento = await Evento.buscarPorId(idEvento);

		verifica.registroExiste(evento, Evento.nome);

		return {
			status: 200,
			message: evento,
		};
	} catch (erro) {
		console.error(erro);
		throw erro;
	}
};

const eventoService = {
	criar,
	listar,
	deletar,
	atualizar,
	buscarPorId,
};

export default eventoService;
