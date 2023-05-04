import bcrypt from 'bcryptjs';
import db from '../models/db.model.js';
import CargoRepository from '../repositories/cargo.repository.js';
import UsuarioRepository from '../repositories/usuario.repository.js';
import verifica from '../helpers/verificacao.helper.js';

const criar = async (novo) => {
	try {
		const Usuario = new UsuarioRepository(db.usuario);

		const usuario = Usuario.buscarPorLogin(novo.usuario_login);

		verifica.registroDuplicado(usuario, Usuario.nome);

		verifica.senhaValida(novo.usuario_senha);

		novo.usuario_senha = bcrypt.hashSync(novo.usuario_senha, 8);

		const resposta = await Usuario.salvar(novo);

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
		const Usuario = new UsuarioRepository(db.usuario);

		const usuarios = await Usuario.buscarTodos();
		const listaUsuarios = [];

		for (let usuario of usuarios) {
			listaUsuarios.push(await Usuario.usuarioView(usuario));
		}

		verifica.registroVazio(listaUsuarios, Usuario.nome);

		return {
			status: 200,
			message: listaUsuarios,
		};
	} catch (erro) {
		console.error(erro);
		throw erro;
	}
};

const deletar = async (idUsuario) => {
	try {
		const Usuario = new UsuarioRepository(db.usuario);

		const usuario = await Usuario.buscarPorId(idUsuario);

		verifica.registroExiste(usuario, Usuario.nome);

		const resposta = await Usuario.deletarPorId(idUsuario);

		return {
			status: 202,
			message: resposta,
		};
	} catch (erro) {
		console.error(erro);
		throw erro;
	}
};

const atualizarPorAdmin = async (idUsuario, alteracao) => {
	try {
		const Usuario = new UsuarioRepository(db.usuario);

		const usuario = await Usuario.buscarPorId(idUsuario);

		verifica.registroExiste(usuario, Usuario.nome);

		if (alteracao.usuario_login) {
			const usuario2 = await Usuario.buscarPorLogin(alteracao.usuario_login);

			verifica.registroDuplicado(usuario2, Usuario.nome);
		}

		if (alteracao.usuario_cargo) {
			const Cargo = new CargoRepository(db.cargo);

			const cargo = await Cargo.buscarPorId(alteracao.usuario_cargo);

			verifica.registroExiste(cargo, Cargo.nome);
		}

		if (alteracao.usuario_senha) {
			verifica.senhaValida(alteracao.usuario_senha);

			alteracao.usuario_senha = bcrypt.hashSync(alteracao.usuario_senha, 8);
		}

		const resposta = await Usuario.atualizarPorId(idUsuario, alteracao);

		return {
			status: 202,
			message: resposta,
		};
	} catch (erro) {
		console.error(erro);
		throw erro;
	}
};

const atualizar = async (idUsuario, alteracao) => {
	try {
		const Usuario = new UsuarioRepository(db.usuario);

		delete alteracao.usuario_cargo;

		const usuario = await Usuario.buscarPorId(idUsuario);

		verifica.registroExiste(usuario, Usuario.nome);

		if (alteracao.usuario_login) {
			const usuario2 = await Usuario.buscarPorLogin(alteracao.usuario_login);

			verifica.registroDuplicado(usuario2, Usuario.nome);
		}

		if (alteracao.usuario_senha) {
			verifica.senhaValida(alteracao.usuario_senha);

			alteracao.usuario_senha = bcrypt.hashSync(alteracao.usuario_senha, 8);
		}

		const resposta = await Usuario.atualizarPorId(idUsuario, alteracao);

		return {
			status: 202,
			message: resposta,
		};
	} catch (erro) {
		console.error(erro);
		throw erro;
	}
};

const buscarPorId = async (idUsuario) => {
	try {
		const Usuario = new UsuarioRepository(db.usuario);

		const usuario = await Usuario.buscarPorId(idUsuario);

		verifica.registroExiste(usuario, Usuario.nome);

		const resposta = await Usuario.usuarioView(usuario);

		return {
			status: 200,
			message: resposta,
		};
	} catch (erro) {
		console.error(erro);
		throw erro;
	}
};

const buscarPorLogin = async (loginUsuario) => {
	try {
		const Usuario = new UsuarioRepository(db.usuario);

		const usuario = await Usuario.buscarPorLogin(loginUsuario);

		verifica.registroExiste(usuario, Usuario.nome);

		const resposta = await Usuario.usuarioView(usuario);

		return {
			status: 200,
			message: resposta,
		};
	} catch (erro) {
		console.error(erro);
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
};

export default usuarioService;
