import verifica from "../helpers/verificacao.helpper.js";
import db from "../models/db.model.js";
import CargoRepository from "../repositories/cargo.repository.js";
import CidadeRepository from "../repositories/cidade.repository.js";
import EstadoRepository from "../repositories/estado.repository.js";
import EstiloRepository from "../repositories/estilo.repository.js";
import ModalidadeRepository from "../repositories/modalidade.repository.js";

const listarCargos = async () => {
    try {
        const Cargo = new CargoRepository(db.cargo);

        const cargos = await Cargo.buscarTodos();

        verifica.registroExiste(cargos, "Cargo");

        return {
            status: 200,
            message: cargos
        }
    } catch (erro) {
        throw erro;
    }
};

const listarCategorias = async () => {
    try {
        const Categoria = new CargoRepository(db.categoria);

        const categorias = await Categoria.buscarTodos();

        verifica.registroExiste(categorias, "Categoria");

        return {
            status: 200,
            message: categorias
        }
    } catch (erro) {
        throw erro;
    }
};

const listarCidades = async (estadoId) => {
    try {
        const Cidade = new CidadeRepository(db.cidade);
        const Estado = new EstadoRepository(db.estado);

        verifica.faltaParametro(estadoId);

        const estado = await Estado.buscarPorId(estadoId);

        verifica.registroExiste(estado, "Estado");

        const cidades = await Cidade.listarPorEstado(estadoId);

        verifica.registroExiste(cidades, "Cidade");

        return {
            status: 200,
            message: cidades
        }
    } catch (erro) {
        throw erro;
    }
};

const listarEstados = async () => {
    try {
        const Estado = new EstadoRepository(db.estado);

        const estados = await Estado.buscarTodos();

        verifica.registroExiste(estados, "Estado");

        return {
            status: 200,
            message: estados
        }
    } catch (erro) {
        throw erro;
    }
};

const listarEstilos = async () => {
    try {
        const Estilo = new EstiloRepository(db.estilo);

        const estilos = await Estilo.buscarTodos();

        verifica.registroExiste(estilos, "Estilo");

        return {
            status: 200,
            message: estilos
        }
    } catch (erro) {
        throw erro;
    }
};

const listarModalidades = async () => {
    try {
        const Modalidade = new ModalidadeRepository(db.modalidade);

        const modalidades = await Modalidade.buscarTodos();

        verifica.registroExiste(modalidades, "Modalidade");

        return {
            status: 200,
            message: modalidades
        }
    } catch (erro) {
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
}

export default listaService;