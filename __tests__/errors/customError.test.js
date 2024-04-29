import CustomError from '../../app/errors/customError.error';

// Simula o módulo dataUtils
jest.mock('../../app/utils/data.util', () => ({
    dataParaStringConsole: jest.fn(() => 'Data formatada')
}));

describe('CustomError', () => {
    test('deve criar um erro personalizado com status e mensagem padrão', () => {
        const defaultError = new CustomError();
        expect(defaultError.name).toBe('CustomError');
        expect(defaultError.status).toBe(500);
        expect(defaultError.date).toBe('Data formatada');
        expect(defaultError.consoleLog).toBe('');
    });

    test('deve criar um erro personalizado com status e mensagem específicos', () => {
        const message = 'Erro específico';
        const status = 404;
        const specificError = new CustomError(status, message);
        expect(specificError.name).toBe('CustomError');
        expect(specificError.status).toBe(status);
        expect(specificError.date).toBe('Data formatada');
        expect(specificError.consoleLog).toBe(message);
    });
});
