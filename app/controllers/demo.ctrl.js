// import db from "../models/db.model.js";
import CargoRepository from '../repositories/cargo.repository.js';
import db from '../models/db.model.js';

const allAccess = async (req, res) => {
    const cargo = new CargoRepository(db.cargo);

    try {
        const registroNovo = {
            cargo_nome: 'Teste Testado 2'
        }
        // await cargo.salvar(registroNovo);
        let todosCargos = await cargo.buscarTodos();
        console.log(todosCargos);
        let mensagem = await cargo.deletarPorId(12);
        // let mensagem = await cargo.atualizarPorId(12, registroNovo);
        todosCargos = await cargo.buscarTodos();
        console.log(todosCargos);
        console.log(mensagem);
        let umCargo = await cargo.contarTodos();
        console.log();
        console.log();
        console.log(umCargo);
        res.status(mensagem.status).send(mensagem.message);
    } catch (erro) {
        console.log(erro.consoleLog);
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