import bcrypt from 'bcryptjs';
import db from '../models/db.model.js';
import CargoRepository from '../repositories/cargo.repository.js';
import UsuarioRepository from '../repositories/usuario.repository.js';
import senhaValida from '../utils/senha.util.js';
import CustomError from '../helpers/customError.helper.js';
import { mensagensConstant } from '../constants/mensagens.constant.js';

const criar = async (novo) => {
    try {
        const Cargo = new CargoRepository(db.cargo);
        const Usuario = new UsuarioRepository(db.usuario);

        const cargo = await Cargo.buscarPorNome(novo.usuario_cargo);

        novo.usuario_cargo = cargo.cargo_id;

        if(!senhaValida(novo.usuario_senha)) {
            throw new CustomError(
                406,
                mensagensConstant.senhaInvalida,
            );
        }

        novo.usuario_senha = bcrypt.hashSync(novo.usuario_senha, 8);

        const resposta = await Usuario.salvar(novo);

        delete novo.usuario_senha;

        return resposta;
    } catch (erro) {
        throw erro;
    }
};

const usuarioService = {
    criar,
}

export default usuarioService;