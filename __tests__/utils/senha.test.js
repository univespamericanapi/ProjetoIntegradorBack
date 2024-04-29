import senhaVerifica from "../../app/utils/senha.util";

describe('senhaVerifica', () => {
    test('deve retornar true para uma senha válida', () => {
        expect(senhaVerifica('ValidPass1')).toBe(true);
    });

    test('deve retornar false para uma senha muito curta', () => {
        expect(senhaVerifica('Vp1')).toBe(false);
    });

    test('deve retornar false para uma senha muito longa', () => {
        expect(senhaVerifica('V'.repeat(51) + 'p1')).toBe(false);
    });

    test('deve retornar false para uma senha sem letras maiúsculas', () => {
        expect(senhaVerifica('validpass1')).toBe(false);
    });

    test('deve retornar false para uma senha sem letras minúsculas', () => {
        expect(senhaVerifica('VALIDPASS1')).toBe(false);
    });

    test('deve retornar false para uma senha sem dígitos', () => {
        expect(senhaVerifica('ValidPass')).toBe(false);
    });

    test('deve retornar false para uma senha com espaços', () => {
        expect(senhaVerifica('Valid Pass1')).toBe(false);
    });

    test('deve retornar false para senhas proibidas', () => {
        expect(senhaVerifica('Passw0rd')).toBe(false);
        expect(senhaVerifica('Password123')).toBe(false);
    });
});
