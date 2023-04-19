// import db from "../models/db.model.js";

import criaUsuario from "./logon.controller.js";

const allAccess = async (req, res) => {
    criaUsuario(req, res);
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