import { mensagensConstant } from '../constants/mensagens.constant.js';
import CustomError from '../errors/customError.error.js';
import senhaVerifica from './senha.util.js';
import validaCpf from './cpf.util.js';
import validator from 'email-validator';

const registroExiste = (registro, nome) => {
	if (!registro) {
		throw new CustomError(404, nome + mensagensConstant.registroNaoEncontrado);
	}
};

const registroVazio = (registro, nome) => {
	if (registro.length === 0) {
		throw new CustomError(
			404,
			'Nenhum ' + nome.toLowerCase() + ' foi encontrado.'
		);
	}
};

const senha = (senha) => {
	if (!senha) {
		throw new CustomError(401, mensagensConstant.senhaInvalida);
	}
};

const senhaValida = (senha) => {
	if (!senhaVerifica(senha)) {
		throw new CustomError(406, mensagensConstant.senhaInvalida);
	}
};

const registroDuplicado = (registro, nome) => {
	if (registro) {
		throw new CustomError(400, nome + mensagensConstant.registroJaCadastrado);
	}
};

const emailDuplicado = (registro) => {
	if (registro) {
		throw new CustomError(400, mensagensConstant.emailJaCadastrado);
	}
};

const faltaParametro = (parametro, nome) => {
	if (!parametro) {
		throw new CustomError(400, nome + mensagensConstant.parametroNaoEnviado);
	}
};

const cpfValido = (cpf) => {
	if (!validaCpf(cpf)) {
		throw new CustomError(400, mensagensConstant.cpfInvalido);
	}
};

const emailValida = (email) => {
	if (!validator.validate(email)) {
		throw new CustomError(400, mensagensConstant.emailInvalido);
	}
};

const vagasInscri = (concurso) => {
	if (concurso.conc_atual_inscr >= concurso.conc_limit_inscr) {
		return 'Espera';
	} else {
		return 'Inscrição';
	}
};

const vagasEspera = (concurso) => {
	if (concurso.conc_atual_espera >= concurso.conc_limit_espera) {
		throw new CustomError(406, mensagensConstant.filaEsperaEncerrada);
	}
};

const aceitouTermos = (termo) => {
	if (!termo) {
		throw new CustomError(400, mensagensConstant.termosNaoAceitos);
	}
};

const concursoInativo = (concurso) => {
	if (!concurso.conc_ativo) {
		throw new CustomError(400, mensagensConstant.concursoInativo);
	}
};

const refreshTokenExpirado = () => {
	throw new CustomError(403, mensagensConstant.refreshTokenExpirou);
};

const extraCospCirc = (extra) => {
	if (!extra.extra_estil || !extra.extra_link_av) {
		throw new CustomError(400, "Campo do Circuito Cosplay" + mensagensConstant.parametroNaoEnviado);
	}
}

const extraCospDesf = (extra) => {
	if (!extra.extra_categ) {
		throw new CustomError(400, "Campo do Desfile Cosplay" + mensagensConstant.parametroNaoEnviado);
	}
}

const extraKpopCirc = (extra) => {
	if (!extra.extra_integ || !extra.extra_link_av || !extra.extra_mat) {
		throw new CustomError(400, "Campo do Circuito Kpop" + mensagensConstant.parametroNaoEnviado);
	}
}

const extraKpopSolo = (extra) => {
	if (!extra.extra_integ || !extra.extra_mod || !extra.extra_link_av) {
		throw new CustomError(400, "Campo do Kpop Solo / Duo" + mensagensConstant.parametroNaoEnviado);
	}
}

const verifica = {
	registroExiste,
	registroVazio,
	senha,
	senhaValida,
	registroDuplicado,
	emailDuplicado,
	faltaParametro,
	cpfValido,
	emailValida,
	vagasInscri,
	vagasEspera,
	aceitouTermos,
	concursoInativo,
	refreshTokenExpirado,
	extraCospCirc,
	extraCospDesf,
	extraKpopCirc,
	extraKpopSolo,
};

export default verifica;
