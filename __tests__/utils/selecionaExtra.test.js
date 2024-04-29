import selecionaExtra from '../../app/utils/selecionaExtra.util';
import { concursosConstant } from '../../app/constants/listas.constant';
import CosplayCircuitoRepository from '../../app/repositories/cosp_circ.repository';
import CosplayDesfileRepository from '../../app/repositories/cosp_desf.repository';
import KpopCircuitoRepository from '../../app/repositories/kpop_circ.repository';
import KpopSoloDuoRepository from '../../app/repositories/kpop_solo.repository';
import verifica from '../../app/utils/verificacao.util';
import consoleError from "../../app/utils/consoleError.util";

jest.mock('../../app/utils/verificacao.util');
jest.mock("../../app/utils/consoleError.util");

describe('selecionaExtra', () => {
    test('deve retornar uma instância de CosplayCircuitoRepository para o primeiro concurso', async () => {
        const extra = { extra_estil: '1' };
        const resultado = await selecionaExtra(concursosConstant[0], extra);
        expect(resultado).toBeInstanceOf(CosplayCircuitoRepository);
    });

    test('deve retornar uma instância de CosplayDesfileRepository para o segundo concurso', async () => {
        const extra = { extra_categ: '1' };
        const resultado = await selecionaExtra(concursosConstant[1], extra);
        expect(resultado).toBeInstanceOf(CosplayDesfileRepository);
    });

    test('deve retornar uma instância de KpopCircuitoRepository para o terceiro concurso', async () => {
        const extra = { extra_categ: '1' };
        const resultado = await selecionaExtra(concursosConstant[3], extra);
        expect(resultado).toBeInstanceOf(KpopCircuitoRepository);
    });

    test('deve retornar uma instância de KpopSoloDuoRepository para o quarto concurso', async () => {
        const extra = { extra_mod: '1' };
        const resultado = await selecionaExtra(concursosConstant[4], extra);
        expect(resultado).toBeInstanceOf(KpopSoloDuoRepository);
    });

    test('deve chamar consoleError e lançar erro em caso de exceção', async () => {
        const extra = { extra_mod: '1' };
        verifica.registroExiste.mockImplementation(() => {
            throw new Error('Erro simulado');
        });
        await expect(selecionaExtra(concursosConstant[4], extra)).rejects.toThrow('Erro simulado');
        expect(consoleError).toHaveBeenCalledWith(new Error('Erro simulado'));
    });
});
