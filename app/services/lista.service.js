import { mensagensConstant } from "../constants/mensagens.constant.js";
import CustomError from "../helpers/customError.helper.js";
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

        if (!cargos) {
            throw new CustomError(
                404,
                Cargo.nomeModel + mensagensConstant.registroNaoEncontrado
            );
        }

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

        if (!categorias) {
            throw new CustomError(
                404,
                Categoria.nomeModel + mensagensConstant.registroNaoEncontrado
            );
        }

        return {
            status: 200,
            message: categorias
        }
    } catch (erro) {
        throw erro;
    }
};

const listarCidades = async (estado) => {
    try {
        const Cidade = new CidadeRepository(db.cidade);

        if (!estado) {
            throw new CustomError(
                400,
                mensagensConstant.estadoNaoEnviado
            );
        }

        const cidades = await Cidade.listarPorEstado(estado);

        if (!cidades) {
            throw new CustomError(
                404,
                Cidade.nomeModel + mensagensConstant.registroNaoEncontrado
            );
        }

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

        if (!estados) {
            throw new CustomError(
                404,
                Estado.nomeModel + mensagensConstant.registroNaoEncontrado
            );
        }

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

        if (!estilos) {
            throw new CustomError(
                404,
                Estilo.nomeModel + mensagensConstant.registroNaoEncontrado
            );
        }

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

        if (!modalidades) {
            throw new CustomError(
                404,
                Modalidade.nomeModel + mensagensConstant.registroNaoEncontrado
            );
        }

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