import { mensagensConstant } from "../constants/mensagens.constant.js";
import CustomError from "./customError.helper.js";
import senhaVerifica from "../utils/senha.util.js";
import dataUtils from "../utils/data.util.js";
import validaCpf from "./cpf.helper.js";
import validator from "email-validator";

const registroExiste = (registro, nome) => {
    if (!registro) {
        throw new CustomError(
            404,
            nome + mensagensConstant.registroNaoEncontrado,
        );
    }
};

const registroVazio = (registro, nome) => {
    if (registro.length === 0) {
        throw new CustomError(
            404,
            nome + mensagensConstant.registroNaoEncontrado,
        );
    }
};

const senhaValida = (senha) => {
    if (!senhaVerifica(senha)) {
        throw new CustomError(
            406,
            mensagensConstant.senhaInvalida,
        );
    }
};

const registroDuplicado = (registro, nome) => {
    if (registro) {
        throw new CustomError(
            400,
            nome + mensagensConstant.registroJaCadastrado,
        );
    }
};

const faltaParametro = (parametro) => {
    if (!parametro) {
        throw new CustomError(
            400,
            mensagensConstant.parametroNaoEnviado,
        );
    }
};

const cpfValido = (cpf) => {
    if (!validaCpf(cpf)) {
        throw new CustomError(
            400,
            mensagensConstant.cpfInvalido,
        );
    }
}

const emailValida = (email) => {
    if (!validator.validate(email)) {
        throw new CustomError(
            400,
            mensagensConstant.emailInvalido,
        );
    }
};

const vagasInscri = (concurso) => {
    return concurso.conc_atual_inscr >= concurso.conc_limit_inscr;
};

const vagasEspera = (concurso) => {
    if (concurso.conc_atual_espera >= concurso.conc_limit_espera) {
        throw new CustomError(
            406,
            mensagensConstant.filaEsperaEncerrada,
        );
    }
};

const aceitouTermos = (termo) => {
    if (!termo) {
        throw new CustomError(
            400,
            mensagensConstant.termosNaoAceitos,
        );
    }
};

const concursoInativo = (concurso) => {
    if (!concurso.conc_ativo) {
        throw new CustomError(
            400,
            mensagensConstant.concursoInativo,
        );
    }
};

const verifica = {
    registroExiste,
    registroVazio,
    senhaValida,
    registroDuplicado,
    faltaParametro,
    cpfValido,
    emailValida,
    vagasInscri,
    vagasEspera,
    aceitouTermos,
    concursoInativo,
}

export default verifica;