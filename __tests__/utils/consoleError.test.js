import consoleError from '../../app/utils/consoleError.util';
import { coresLog } from '../../app/constants/coresLog.constant';

describe('consoleError', () => {
    beforeEach(() => {
        // Limpa as chamadas de simulação antes de cada teste
        jest.clearAllMocks();
    });

    // Simula a função console.error
    global.console = { error: jest.fn() };

    test('deve imprimir a mensagem de erro formatada com status', () => {
        const error = { status: 404, consoleLog: 'Página não encontrada' };
        consoleError(error);
        expect(global.console.error).toHaveBeenCalledWith(
            `${coresLog.BgRed}Erro: (${error.status}) ${error.consoleLog}${coresLog.Reset}`
        );
    });

    test('deve imprimir a mensagem de erro formatada sem status', () => {
        const error = 'Erro desconhecido';
        consoleError(error);
        expect(global.console.error).toHaveBeenCalledWith(
            `${coresLog.BgRed}${error}${coresLog.Reset}`
        );
    });
});
