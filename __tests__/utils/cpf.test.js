import validaCpf from "../../app/utils/cpf.util";

describe('Testes para a função validaCpf', () => {
    test('deve retornar true para um CPF válido', () => {
        expect(validaCpf('123.456.789-09')).toBeTruthy();
    });

    test('deve retornar false para um CPF com todos os números iguais', () => {
        expect(validaCpf('111.111.111-11')).toBeFalsy();
    });

    test('deve retornar false para um CPF com caracteres não numéricos', () => {
        expect(validaCpf('123.456.789-ab')).toBeFalsy();
    });

    test('deve retornar false para um CPF com menos de 11 dígitos', () => {
        expect(validaCpf('123.456.789')).toBeFalsy();
    });

    test('deve retornar false para um CPF com mais de 11 dígitos', () => {
        expect(validaCpf('123.456.789-09123')).toBeFalsy();
    });

    test('deve retornar false para um CPF com dígitos válidos, mas dígito verificador incorreto', () => {
        expect(validaCpf('123.456.789-00')).toBeFalsy();
    });
});