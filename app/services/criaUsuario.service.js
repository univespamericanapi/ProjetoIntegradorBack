import bcrypt from 'bcryptjs';
import db from '../models/db.model.js';
import CargoRepository from '../repositories/cargo.repository.js';
import UsuarioRepository from '../repositories/usuario.repository.js';
import CustomError from "../helpers/customError.helper.js";

const criaUsuarioService = async (novo) => {
    try {
        const Cargo = new CargoRepository(db.cargo);
        const Usuario = new UsuarioRepository(db.usuario);

        const cargo = await Cargo.buscarPorNome(novo.usuario_cargo);

        novo.usuario_cargo = cargo.cargo_id;
        novo.usuario_senha = bcrypt.hashSync(novo.usuario_senha, 8);

        const resposta = await Usuario.salvar(novo);

        return resposta;
    } catch (erro) {
        throw new CustomError(
            500,
            erro.message,
        );
    }
};

export default criaUsuarioService;