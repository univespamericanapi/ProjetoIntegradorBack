import bcrypt from 'bcryptjs';
import db from '../models/db.model.js';
import CargoRepository from '../repositories/cargo.repository.js';
import UsuarioRepository from '../repositories/usuario.repository.js';
import criaUsuarioService from '../services/criaUsuario.service.js';

const criaUsuarioController = async (req, res) => {
    try {
        const resposta = await criaUsuarioService(req.body);

        return res.status(resposta.status).send(resposta.message);
    } catch (erro) {
        return res.status(erro.status).send(erro.message);
    }
};

export default criaUsuarioController;