import { mensagensConstant } from "../constants/mensagens.constant.js";
import CustomError from "./customError.helper.js";
import senhaVerifica from "../utils/senha.util.js";

const registroExiste = (registro, Model) => {
    if (!registro) {
        throw new CustomError(
            404,
            Model.nomeModel + mensagensConstant.registroNaoEncontrado,
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

const registroDuplicado = (registro, Model) => {
    if (registro) {
        throw new CustomError(
            400,
            Model.nomeModel + mensagensConstant.registroJaCadastrado,
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
}

const verifica = {
    registroExiste,
    senhaValida,
    registroDuplicado,
    faltaParametro,
}

export default verifica;