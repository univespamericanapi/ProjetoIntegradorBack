import BaseRepository from '../../app/repositories/base.repository';
import { mensagensConstant } from '../../app/constants/mensagens.constant';
import consoleError from '../../app/utils/consoleError.util';

jest.mock("../../app/utils/consoleError.util");

const mockModel = {
    create: jest.fn(),
    findAll: jest.fn(),
    findByPk: jest.fn(),
    destroy: jest.fn(),
    update: jest.fn(),
    count: jest.fn(),
    getTableName: jest.fn()
};

const mockRegistro = { id: 1, nome: 'Teste' };
const mockAlteracoes = { nome: 'Teste Atualizado' };
const nomeModel = 'Registro';

const mockId = 1;
const erroSimulado = new Error('Erro simulado');

describe('BaseRepository', () => {
    let baseRepo;

    beforeEach(() => {
        baseRepo = new BaseRepository(mockModel);
        baseRepo.nome = nomeModel;
        jest.clearAllMocks();
    });

    test('salvar - deve salvar um registro e retornar mensagem de sucesso', async () => {
        mockModel.create.mockResolvedValue(mockRegistro);
        const resultado = await baseRepo.salvar(mockRegistro);
        expect(mockModel.create).toHaveBeenCalledWith(mockRegistro);
        expect(resultado).toBe(nomeModel + mensagensConstant.registroCriado);
    });

    test('buscarTodos - deve buscar todos os registros', async () => {
        mockModel.findAll.mockResolvedValue([mockRegistro]);
        const resultado = await baseRepo.buscarTodos();
        expect(mockModel.findAll).toHaveBeenCalled();
        expect(resultado).toEqual([mockRegistro]);
    });

    test('buscarPorId - deve buscar um registro pelo ID', async () => {
        mockModel.findByPk.mockResolvedValue(mockRegistro);
        const resultado = await baseRepo.buscarPorId(1);
        expect(mockModel.findByPk).toHaveBeenCalledWith(1);
        expect(resultado).toEqual(mockRegistro);
    });

    test('deletarPorId - deve deletar um registro pelo ID e retornar mensagem de sucesso', async () => {
        mockModel.findByPk.mockResolvedValue({ ...mockRegistro, destroy: jest.fn().mockResolvedValue(true) });
        const resultado = await baseRepo.deletarPorId(1);
        expect(mockModel.findByPk).toHaveBeenCalledWith(1);
        expect(resultado).toBe(nomeModel + mensagensConstant.registroDeletado);
    });

    test('atualizarPorId - deve atualizar um registro pelo ID e retornar mensagem de sucesso', async () => {
        mockModel.findByPk.mockResolvedValue({ ...mockRegistro, update: jest.fn().mockResolvedValue(mockAlteracoes) });
        const resultado = await baseRepo.atualizarPorId(1, mockAlteracoes);
        expect(mockModel.findByPk).toHaveBeenCalledWith(1);
        expect(resultado).toBe(nomeModel + mensagensConstant.registroAtualizado);
    });

    test('contarTodos - deve contar todos os registros', async () => {
        mockModel.count.mockResolvedValue(1);
        const resultado = await baseRepo.contarTodos();
        expect(mockModel.count).toHaveBeenCalled();
        expect(resultado).toBe(1);
    });

    test('pegarNomeModel - deve retornar o nome do modelo formatado', () => {
        mockModel.getTableName.mockReturnValue('registros');
        const resultado = baseRepo.pegarNomeModel();
        expect(mockModel.getTableName).toHaveBeenCalled();
        expect(resultado).toBe('Registro');
    });

    test('salvar - deve lançar um erro quando o método create falhar', async () => {
        mockModel.create.mockRejectedValue(erroSimulado);
        await expect(baseRepo.salvar(mockRegistro)).rejects.toThrow(erroSimulado);
        expect(consoleError).toHaveBeenCalledWith(erroSimulado);
    });

    test('buscarTodos - deve lançar um erro quando o método findAll falhar', async () => {
        mockModel.findAll.mockRejectedValue(erroSimulado);
        await expect(baseRepo.buscarTodos()).rejects.toThrow(erroSimulado);
        expect(consoleError).toHaveBeenCalledWith(erroSimulado);
    });

    test('buscarPorId - deve lançar um erro quando o método findByPk falhar', async () => {
        mockModel.findByPk.mockRejectedValue(erroSimulado);
        await expect(baseRepo.buscarPorId(mockId)).rejects.toThrow(erroSimulado);
        expect(consoleError).toHaveBeenCalledWith(erroSimulado);
    });

    test('deletarPorId - deve lançar um erro quando o registro não for encontrado', async () => {
        mockModel.findByPk.mockResolvedValue(null);
        await expect(baseRepo.deletarPorId(mockId)).rejects.toThrow();
        expect(consoleError).toHaveBeenCalled();
    });

    test('deletarPorId - deve lançar um erro quando o método destroy falhar', async () => {
        mockModel.findByPk.mockResolvedValue({ ...mockRegistro, destroy: jest.fn().mockRejectedValue(erroSimulado) });
        await expect(baseRepo.deletarPorId(mockId)).rejects.toThrow(erroSimulado);
        expect(consoleError).toHaveBeenCalledWith(erroSimulado);
    });

    test('atualizarPorId - deve lançar um erro quando o registro não for encontrado', async () => {
        mockModel.findByPk.mockResolvedValue(null);
        await expect(baseRepo.atualizarPorId(mockId, mockAlteracoes)).rejects.toThrow();
        expect(consoleError).toHaveBeenCalled();
    });

    test('atualizarPorId - deve lançar um erro quando o método update falhar', async () => {
        mockModel.findByPk.mockResolvedValue({ ...mockRegistro, update: jest.fn().mockRejectedValue(erroSimulado) });
        await expect(baseRepo.atualizarPorId(mockId, mockAlteracoes)).rejects.toThrow(erroSimulado);
        expect(consoleError).toHaveBeenCalledWith(erroSimulado);
    });

    test('contarTodos - deve lançar um erro quando o método count falhar', async () => {
        mockModel.count.mockRejectedValue(erroSimulado);
        await expect(baseRepo.contarTodos()).rejects.toThrow(erroSimulado);
        expect(consoleError).toHaveBeenCalledWith(erroSimulado);
    });
});
