// import db from "../models/db.model.js";
import CargoRepository from '../repositories/cargo.repository.js';
import db from '../models/db.model.js';
import { coresLog } from '../constants/coresLog.constant.js';

const allAccess = async (req, res) => {
    const cargo = new CargoRepository(db.cargo);

    const registroNovo = {
        cargo_nome: 'Teste'
    }
    try {
        // await cargo.salvar(registroNovo);
        let todosCargos = await cargo.buscarTodos();
        console.log(todosCargos);
        let mensagem = await cargo.deletarPorId(11);
        todosCargos = await cargo.buscarTodos();
        console.log(todosCargos);
        console.log(mensagem);
        res.status(mensagem.status).send(mensagem.message);
    } catch (erro) {
        return res.status(erro.status).send(erro.message);
    }

    // res.status(200).send('Public Content.');
};

const userBoard = (req, res) => {
    res.status(200).send('User Content.');
};

const staffBoard = (req, res) => {
    res.status(200).send('Staff Content.');
};

const adminBoard = (req, res) => {
    res.status(200).send('Admin Content.');
};

const demoCtrl = {
    allAccess,
    userBoard,
    staffBoard,
    adminBoard
};

export default demoCtrl;