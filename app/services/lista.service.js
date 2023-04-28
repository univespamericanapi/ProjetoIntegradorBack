import verifica from "../helpers/verificacao.helper.js";
import db from "../models/db.model.js";
import CargoRepository from "../repositories/cargo.repository.js";
import CidadeRepository from "../repositories/cidade.repository.js";
import ConcursoRepository from "../repositories/concurso.repository.js";
import EstadoRepository from "../repositories/estado.repository.js";
import EstiloRepository from "../repositories/estilo.repository.js";
import EventoRepository from "../repositories/evento.repository.js";
import ModalidadeRepository from "../repositories/modalidade.repository.js";

const listarCargos = async () => {
    try {
        const Cargo = new CargoRepository(db.cargo);

        const cargos = await Cargo.buscarTodos();

        verifica.registroExiste(cargos, Cargo.nome);

        return {
            status: 200,
            message: cargos
        }
    } catch (erro) {
        console.error(erro);
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
            message: categorias
        }
    } catch (erro) {
        console.error(erro);
        throw erro;
    }
};

const listarCidades = async (estadoId) => {
    try {
        const Cidade = new CidadeRepository(db.cidade);
        const Estado = new EstadoRepository(db.estado);

        verifica.faltaParametro(estadoId);

        const estado = await Estado.buscarPorId(estadoId);

        verifica.registroExiste(estado, Estado.nome);

        const cidades = await Cidade.listarPorEstado(estadoId);

        verifica.registroExiste(cidades, Cidade.nome);

        return {
            status: 200,
            message: cidades
        }
    } catch (erro) {
        console.error(erro);
        throw erro;
    }
};

const listarEstados = async () => {
    try {
        const Estado = new EstadoRepository(db.estado);

        const estados = await Estado.buscarTodos();

        verifica.registroExiste(estados, Estado.nome);

        return {
            status: 200,
            message: estados
        }
    } catch (erro) {
        console.error(erro);
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
            message: estilos
        }
    } catch (erro) {
        console.error(erro);
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
            message: modalidades
        }
    } catch (erro) {
        console.error(erro);
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
        console.error(erro);
        throw erro;
    }
};

const listarConcursos = async (idEvento) => {
    try {
        const Concurso = new ConcursoRepository(db.concurso);

        const concursos = await Concurso.buscarPorEvento(idEvento);
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
        console.error(erro);
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
}

export default listaService;