import bcrypt from 'bcryptjs';
import db from '../models/db.model.js';
import CargoRepository from '../repositories/cargo.repository.js';
import UsuarioRepository from '../repositories/usuario.repository.js'
import usuarioUtils from '../utils/usuario.util.js';
import verifica from '../helpers/verificacao.helpper.js';

const criar = async (novo) => {
    try {
        const Cargo = new CargoRepository(db.cargo);
        const Usuario = new UsuarioRepository(db.usuario);

        const cargo = await Cargo.buscarPorNome(novo.usuario_cargo);

        verifica.registroExiste(cargo, Cargo);

        novo.usuario_cargo = cargo.cargo_id;

        verifica.senhaValida(novo.usuario_senha);

        novo.usuario_senha = bcrypt.hashSync(novo.usuario_senha, 8);

        const resposta = await Usuario.salvar(novo);

        delete novo.usuario_senha;

        return {
            status: 201,
            message: resposta
        };
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

        verifica.registroExiste(listaUsuarios, Usuario);

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

        verifica.faltaParametro(idUsuario);

        const usuario = await Usuario.buscarPorId(idUsuario);

        verifica.registroExiste(usuario, Usuario);

        const resposta = await Usuario.deletarPorId(idUsuario);

        console.log(resposta);

        return {
            status: 202,
            message: resposta
        };
    } catch (erro) {
        throw erro;
    }
};

const atualizarPorAdmin = async (idUsuario, alteracao) => {
    try {
        const Usuario = new UsuarioRepository(db.usuario);

        verifica.faltaParametro(idUsuario);

        const usuario1 = await Usuario.buscarPorId(idUsuario);

        verifica.registroExiste(usuario1, Usuario);

        if (alteracao.usuario_login) {
            const usuario2 = await Usuario.buscarPorLogin(alteracao.usuario_login);

            verifica.registroDuplicado(usuario2, Usuario);
        }

        if (alteracao.usuario_cargo) {
            const Cargo = new CargoRepository(db.cargo);

            const cargo = await Cargo.buscarPorNome(alteracao.usuario_cargo);

            verifica.registroExiste(cargo, Cargo);

            alteracao.usuario_cargo = cargo.cargo_id;
        }

        if (alteracao.usuario_senha) {
            verifica.senhaValida(alteracao.usuario_senha);

            alteracao.usuario_senha = bcrypt.hashSync(alteracao.usuario_senha, 8);
        }

        const resposta = await Usuario.atualizarPorId(idUsuario, alteracao);

        return {
            status: 202,
            message: resposta
        };
    } catch (erro) {
        throw erro;
    }
};

const atualizar = async (idUsuario, alteracao) => {
    try {
        const Usuario = new UsuarioRepository(db.usuario);

        verifica.faltaParametro(idUsuario);

        const usuario1 = await Usuario.buscarPorId(idUsuario);

        verifica.registroExiste(usuario1, Usuario);

        delete alteracao.usuario_cargo;

        if (alteracao.usuario_login) {
            const usuario2 = await Usuario.buscarPorLogin(alteracao.usuario_login);

            verifica.registroDuplicado(usuario2, Usuario);
        }

        if (alteracao.usuario_senha) {
            verifica.senhaValida(alteracao.usuario_senha);

            alteracao.usuario_senha = bcrypt.hashSync(alteracao.usuario_senha, 8);
        }

        const resposta = await Usuario.atualizarPorId(idUsuario, alteracao);

        if (alteracao.usuario_senha) {
            delete alteracao.usuario_senha;
        }

        return {
            status: 202,
            message: resposta
        };
    } catch (erro) {
        throw erro;
    }
};

const buscarPorId = async (idUsuario) => {
    try {
        const Usuario = new UsuarioRepository(db.usuario);

        const temp = await Usuario.buscarPorId(idUsuario);

        verifica.registroExiste(temp, Usuario);

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

        verifica.registroExiste(temp, Usuario);

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