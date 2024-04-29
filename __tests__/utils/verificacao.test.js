import verifica from '../../app/utils/verificacao.util';
import CustomError from '../../app/errors/customError.error';
import senhaVerifica from '../../app/utils/senha.util';
import validaCpf from '../../app/utils/cpf.util';
import validator from 'email-validator';
import { mensagensConstant } from '../../app/constants/mensagens.constant';

jest.mock('../../app/utils/senha.util');
jest.mock('../../app/utils/cpf.util');
jest.mock('email-validator', () => ({
    validate: jest.fn()
}));

describe('verifica', () => {
    const nome = 'Teste';
    const senha = 'Senha123!';
    const concurso = { conc_atual_inscr: 1, conc_limit_inscr: 2, conc_atual_espera: 0, conc_limit_espera: 1, conc_ativo: true };

    beforeEach(() => {
        senhaVerifica.mockReturnValue(true);
        validaCpf.mockReturnValue(true);
        validator.validate.mockReturnValue(true);
    });

    test('registroExiste - deve lançar um erro se o registro não existir', () => {
        expect(() => verifica.registroExiste(null, nome)).toThrow(CustomError);
    });

    test('registroVazio - deve lançar um erro se o registro estiver vazio', () => {
        expect(() => verifica.registroVazio([], nome)).toThrow(CustomError);
    });

    test('senha - deve lançar um erro se a senha não for fornecida', () => {
        expect(() => verifica.senha(null)).toThrow(CustomError);
    });

    test('senhaValida - deve lançar um erro se a senha não for válida', () => {
        senhaVerifica.mockReturnValueOnce(false);
        expect(() => verifica.senhaValida(senha)).toThrow(CustomError);
    });

    test('vagasInscri - deve retornar "Espera" se não houver vagas para inscrição', () => {
        const concursoCheio = { ...concurso, conc_atual_inscr: concurso.conc_limit_inscr };
        expect(verifica.vagasInscri(concursoCheio)).toBe('Espera');
    });

    test('vagasEspera - deve lançar um erro se a fila de espera estiver cheia', () => {
        const concursoEsperaCheia = { ...concurso, conc_atual_espera: concurso.conc_limit_espera };
        expect(() => verifica.vagasEspera(concursoEsperaCheia)).toThrow(CustomError);
    });

    test('faltaParametro - deve lançar um erro se um parâmetro obrigatório estiver faltando', () => {
        expect(() => verifica.faltaParametro(null, 'Nome')).toThrow(CustomError);
    });

    test('cpfValido - deve lançar um erro se o CPF for inválido', () => {
        validaCpf.mockReturnValueOnce(false);
        expect(() => verifica.cpfValido('123.456.789-00')).toThrow(CustomError);
    });

    test('emailValida - deve lançar um erro se o email for inválido', () => {
        validator.validate.mockReturnValueOnce(false);
        expect(() => verifica.emailValida('invalido@exemplo.com')).toThrow(CustomError);
    });

    test('aceitouTermos - deve lançar um erro se os termos não forem aceitos', () => {
        expect(() => verifica.aceitouTermos(false)).toThrow(CustomError);
    });

    test('concursoInativo - deve lançar um erro se o concurso estiver inativo', () => {
        const concursoInativo = { conc_ativo: false };
        expect(() => verifica.concursoInativo(concursoInativo)).toThrow(CustomError);
    });

    test('refreshTokenExpirado - deve lançar um erro se o refresh token estiver expirado', () => {
        expect(() => verifica.refreshTokenExpirado()).toThrow(CustomError);
    });

    test('extraCospCirc - deve lançar um erro se os campos obrigatórios do Circuito Cosplay estiverem faltando', () => {
        const extraInvalido = { extra_estil: null, extra_link_av: null };
        expect(() => verifica.extraCospCirc(extraInvalido)).toThrow(CustomError);
    });

    test('extraCospDesf - deve lançar um erro se o campo obrigatório do Desfile Cosplay estiver faltando', () => {
        const extraInvalido = { extra_categ: null };
        expect(() => verifica.extraCospDesf(extraInvalido)).toThrow(CustomError);
    });

    test('extraKpopCirc - deve lançar um erro se os campos obrigatórios do Circuito Kpop estiverem faltando', () => {
        const extraInvalido = { extra_integ: null, extra_link_av: null, extra_mat: null };
        expect(() => verifica.extraKpopCirc(extraInvalido)).toThrow(CustomError);
    });

    test('extraKpopSolo - deve lançar um erro se os campos obrigatórios do Kpop Solo / Duo estiverem faltando', () => {
        const extraInvalido = { extra_integ: null, extra_mod: null, extra_link_av: null };
        expect(() => verifica.extraKpopSolo(extraInvalido)).toThrow(CustomError);
    });

    test('registroDuplicado - deve lançar um erro se o registro já existir', () => {
        const registro = { id: 1 };
        expect(() => verifica.registroDuplicado(registro, 'Usuário')).toThrow(CustomError);
        expect(() => verifica.registroDuplicado(registro, 'Usuário')).toThrow(mensagensConstant.registroJaCadastrado);
    });

    test('emailDuplicado - deve lançar um erro se o e-mail já estiver cadastrado', () => {
        const registro = { email: 'teste@teste.com' };
        expect(() => verifica.emailDuplicado(registro)).toThrow(CustomError);
        expect(() => verifica.emailDuplicado(registro)).toThrow(mensagensConstant.emailJaCadastrado);
    });

    test('vagasInscri - deve retornar "Espera" se não houver vagas para inscrição', () => {
        const concursoCheio = { conc_atual_inscr: 2, conc_limit_inscr: 2 };
        expect(verifica.vagasInscri(concursoCheio)).toBe('Espera');
    });

    test('vagasInscri - deve retornar "Inscrição" se houver vagas para inscrição', () => {
        const concursoComVagas = { conc_atual_inscr: 1, conc_limit_inscr: 2 };
        expect(verifica.vagasInscri(concursoComVagas)).toBe('Inscrição');
    });
});
