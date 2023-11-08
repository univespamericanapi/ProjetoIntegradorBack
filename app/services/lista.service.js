import verifica from '../utils/verificacao.util.js';
import db from '../models/db.model.js';
import CargoRepository from '../repositories/cargo.repository.js';
import ConcursoRepository from '../repositories/concurso.repository.js';
import EstiloRepository from '../repositories/estilo.repository.js';
import EventoRepository from '../repositories/evento.repository.js';
import ModalidadeRepository from '../repositories/modalidade.repository.js';
import localidadesConsumer from '../consumer/localidades.consumer.js';
import consoleError from "../utils/consoleError.util.js";

const listarCargos = async () => {
	try {
		const Cargo = new CargoRepository(db.cargo);

		const cargos = await Cargo.buscarTodos();

		verifica.registroExiste(cargos, Cargo.nome);

		return {
			status: 200,
			message: cargos,
		};
	} catch (erro) {
		consoleError(erro);
		throw erro;
	}
};

const listarCategorias = async () => {
	try {
		const Categoria = new CargoRepository(db.categoria);

		const categorias = await Categoria.buscarTodos();

		verifica.registroExiste(categorias, Categoria.nome);

		return {
			status: 200,
			message: categorias,
		};
	} catch (erro) {
		consoleError(erro);
		throw erro;
	}
};

const listarCidades = async (estadoId) => {
	try {
		verifica.faltaParametro(estadoId);

		const estado = await localidadesConsumer.estadoPorId(estadoId);

		verifica.registroExiste(estado, 'Estado');

		const cidades = await localidadesConsumer.cidades(estadoId);

		verifica.registroExiste(cidades, 'Cidade');

		return {
			status: 200,
			message: cidades,
		};
	} catch (erro) {
		consoleError(erro);
		throw erro;
	}
};

const listarEstados = async () => {
	try {
		const estados = await localidadesConsumer.estados();

		verifica.registroExiste(estados, 'Estado');

		return {
			status: 200,
			message: estados,
		};
	} catch (erro) {
		consoleError(erro);
		throw erro;
	}
};

const listarEstilos = async () => {
	try {
		const Estilo = new EstiloRepository(db.estilo);

		const estilos = await Estilo.buscarTodos();

		verifica.registroExiste(estilos, Estilo.nome);

		return {
			status: 200,
			message: estilos,
		};
	} catch (erro) {
		consoleError(erro);
		throw erro;
	}
};

const listarModalidades = async () => {
	try {
		const Modalidade = new ModalidadeRepository(db.modalidade);

		const modalidades = await Modalidade.buscarTodos();

		verifica.registroExiste(modalidades, Modalidade.nome);

		return {
			status: 200,
			message: modalidades,
		};
	} catch (erro) {
		consoleError(erro);
		throw erro;
	}
};

const listarEventos = async () => {
	try {
		const Evento = new EventoRepository(db.evento);

		const eventos = await Evento.buscarTodos();
		const listaEventos = [];

		for (let evento of eventos) {
			listaEventos.push(await Evento.idNomeView(evento));
		}

		verifica.registroVazio(listaEventos, Evento.nome);

		return {
			status: 200,
			message: listaEventos,
		};
	} catch (erro) {
		consoleError(erro);
		throw erro;
	}
};

const listarConcursos = async (idEvento) => {
	try {
		const Concurso = new ConcursoRepository(db.concurso);

		const concursos = await Concurso.buscarPorEventoAtivo(idEvento);
		const listaConcursos = [];

		for (let concurso of concursos) {
			listaConcursos.push(await Concurso.idNomeView(concurso));
		}

		verifica.registroVazio(listaConcursos, Concurso.nome);

		return {
			status: 200,
			message: listaConcursos,
		};
	} catch (erro) {
		consoleError(erro);
		throw erro;
	}
};

const listaService = {
	listarEstados,
	listarCidades,
	listarCargos,
	listarCategorias,
	listarEstilos,
	listarModalidades,
	listarEventos,
	listarConcursos,
};

export default listaService;
