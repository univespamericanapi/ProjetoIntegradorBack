import bcrypt from 'bcryptjs';
import db from '../models/db.model.js';
import CargoRepository from '../repositories/cargo.repository.js';
import UsuarioRepository from '../repositories/usuario.repository.js';
import senhaValida from '../utils/senha.util.js';
import CustomError from '../helpers/customError.helper.js';
import { mensagensConstant } from '../constants/mensagens.constant.js';
import authJwt from '../middlewares/authJwt.js';
import usuarioUtils from '../utils/usuario.util.js';

const criar = async (novo) => {
    try {
        const Cargo = new CargoRepository(db.cargo);
        const Usuario = new UsuarioRepository(db.usuario);

        const cargo = await Cargo.buscarPorNome(novo.usuario_cargo);

        novo.usuario_cargo = cargo.cargo_id;

        if (!senhaValida(novo.usuario_senha)) {
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

const listar = async () => {
    try {
        const Usuario = new UsuarioRepository(db.usuario);

        const usuarios = await Usuario.buscarTodos();
        const listaUsuarios = [];

        for (let usuario of usuarios) {
            const autoridade = await usuarioUtils.cargoExibir(usuario);

            const temp = {
                usuario_id: usuario.usuario_id,
                usuario_login: usuario.usuario_login,
                usuario_nome: usuario.usuario_nome,
                usuario_cargo: autoridade,
            };

            listaUsuarios.push(temp);
        }

        if (!listaUsuarios) {
            throw new CustomError(
                404,
                mensagensConstant.usuarioNaoEncontrado,
            );
        }

        return {
            status: 200,
            message: listaUsuarios,
        };
    } catch (erro) {
        throw erro;
    }
};

const deletar = async (idUsuario) => {
    try {
        const Usuario = new UsuarioRepository(db.usuario);

        const resposta = await Usuario.deletarPorId(idUsuario);

        return resposta;
    } catch (erro) {
        throw erro;
    }
};

const atualizarPorAdmin = async (idUsuario, alteracao) => {
    try {
        const Usuario = new UsuarioRepository(db.usuario);

        if (alteracao.usuario_login) {
            await Usuario.checaUsuarioExiste(alteracao.usuario_login);
        }

        if (alteracao.usuario_cargo) {
            const Cargo = new CargoRepository(db.cargo);

            const cargo = await Cargo.buscarPorNome(alteracao.usuario_cargo);

            console.log(cargo);

            alteracao.usuario_cargo = cargo.cargo_id;
        }

        if (alteracao.usuario_senha) {
            alteracao.usuario_senha = bcrypt.hashSync(alteracao.usuario_senha, 8);
        }

        const resposta = await Usuario.atualizarPorId(idUsuario, alteracao);

        if (alteracao.usuario_senha) {
            delete alteracao.usuario_senha;
        }

        return resposta;
    } catch (erro) {
        throw erro;
    }
};

const atualizar = async (idUsuario, alteracao) => {
    try {
        const Usuario = new UsuarioRepository(db.usuario);

        delete alteracao.usuario_cargo;

        if (alteracao.usuario_login) {
            await Usuario.checaUsuarioExiste(alteracao.usuario_login);
        }

        if (alteracao.usuario_senha) {
            alteracao.usuario_senha = bcrypt.hashSync(alteracao.usuario_senha, 8);
        }

        const resposta = await Usuario.atualizarPorId(idUsuario, alteracao);

        if (alteracao.usuario_senha) {
            delete alteracao.usuario_senha;
        }

        return resposta;
    } catch (erro) {
        throw erro;
    }
};

const buscarPorId = async (idUsuario) => {
    try {
        const Usuario = new UsuarioRepository(db.usuario);

        const temp = await Usuario.buscarPorId(idUsuario);

        const resposta = {
            usuario_id: temp.usuario_id,
            usuario_login: temp.usuario_login,
            usuario_nome: temp.usuario_nome,
            usuario_cargo: await usuarioUtils.cargoExibir(temp),
        };

        return {
            status: 200,
            message: resposta,
        };
    } catch (erro) {
        throw erro;
    }
};

const buscarPorLogin = async (loginUsuario) => {
    try {
        const Usuario = new UsuarioRepository(db.usuario);

        const temp = await Usuario.buscarPorLogin(loginUsuario);

        const resposta = {
            usuario_id: temp.usuario_id,
            usuario_login: temp.usuario_login,
            usuario_nome: temp.usuario_nome,
            usuario_cargo: await usuarioUtils.cargoExibir(temp),
        };

        return {
            status: 200,
            message: resposta,
        };
    } catch (erro) {
        throw erro;
    }
};

const usuarioService = {
    criar,
    listar,
    deletar,
    atualizarPorAdmin,
    atualizar,
    buscarPorId,
    buscarPorLogin,
}

export default usuarioService;