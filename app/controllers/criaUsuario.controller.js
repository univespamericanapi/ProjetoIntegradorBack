import bcrypt from 'bcryptjs';
import db from '../models/db.model.js';
import CargoRepository from '../repositories/cargo.repository.js';
import UsuarioRepository from '../repositories/usuario.repository.js';

const criaUsuario = async (req, res) => {
    try {
        const novo = req.body;
        const Cargo = new CargoRepository(db.cargo);
        const Usuario = new UsuarioRepository(db.usuario);

        const cargo = await Cargo.buscarPorNome(novo.usuario_cargo);

        novo.usuario_cargo = cargo.cargo_id;
        novo.usuario_senha = bcrypt.hashSync(novo.usuario_senha, 8);

        const resposta = await Usuario.salvar(novo);

        return res.status(resposta.status).send(resposta.message);
    } catch (erro) {
        return res.status(erro.status).send(erro.message);
    }
};

export default criaUsuario;