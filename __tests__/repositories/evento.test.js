import EventoRepository from '../../app/repositories/evento.repository';
import { mensagensConstant } from '../../app/constants/mensagens.constant';

jest.mock("../../app/utils/consoleError.util", () => jest.fn());

const mockModel = {
    create: jest.fn(),
    findAll: jest.fn(),
    findByPk: jest.fn(),
    findOne: jest.fn(),
    getTableName: jest.fn()
};

const mockEvento = {
    event_id: 1,
    event_ed_nome: 'Evento Teste'
};

describe('EventoRepository', () => {
    let eventoRepo;
    const erroSimulado = new Error('Erro simulado');
    const id = 1;
    const edNome = 'Evento Teste';
    const alteracoes = { event_nome: 'Evento Atualizado' };

    beforeEach(() => {
        eventoRepo = new EventoRepository(mockModel);
        jest.clearAllMocks();
    });

    test('deve salvar um novo evento', async () => {
        mockModel.create.mockResolvedValue(mockEvento);
        const resultado = await eventoRepo.salvar(mockEvento);
        expect(mockModel.create).toHaveBeenCalledWith(mockEvento);
        expect(resultado).toContain('Evento');
    });

    test('deve buscar todos os eventos', async () => {
        mockModel.findAll.mockResolvedValue([mockEvento]);
        const resultado = await eventoRepo.buscarTodos();
        expect(mockModel.findAll).toHaveBeenCalledWith({ order: [['event_data', 'DESC']] });
        expect(resultado).toEqual([mockEvento]);
    });

    test('deve buscar um evento por ID', async () => {
        mockModel.findByPk.mockResolvedValue(mockEvento);
        const resultado = await eventoRepo.buscarPorId(1);
        expect(mockModel.findByPk).toHaveBeenCalledWith(1, { order: [['event_data', 'DESC']] });
        expect(resultado).toEqual(mockEvento);
    });

    test('deve buscar um evento por nome da edição', async () => {
        mockModel.findOne.mockResolvedValue(mockEvento);
        const resultado = await eventoRepo.buscaPorEdNome('Evento Teste');
        expect(mockModel.findOne).toHaveBeenCalledWith({ where: { event_ed_nome: 'Evento Teste' } });
        expect(resultado).toEqual(mockEvento);
    });

    test('deve retornar uma visualização de ID e nome da edição do evento', () => {
        const resultado = eventoRepo.idNomeView(mockEvento);
        expect(resultado).toEqual({ event_id: 1, event_ed_nome: 'Evento Teste' });
    });

    test('deve deletar um evento por ID', async () => {
        const id = 1;
        const evento = { event_id: id, destroy: jest.fn() };
        mockModel.findByPk.mockResolvedValue(evento);
        evento.destroy.mockResolvedValue(true);

        await expect(eventoRepo.deletarPorId(id)).resolves.toContain(mensagensConstant.registroDeletado);
        expect(evento.destroy).toHaveBeenCalled();
    });

    test('deve atualizar um evento por ID', async () => {
        const id = 1;
        const alteracoes = { event_nome: 'Evento Atualizado' };
        const evento = { event_id: id, update: jest.fn() };
        mockModel.findByPk.mockResolvedValue(evento);
        evento.update.mockResolvedValue(alteracoes);

        await expect(eventoRepo.atualizarPorId(id, alteracoes)).resolves.toContain(mensagensConstant.registroAtualizado);
        expect(evento.update).toHaveBeenCalledWith(alteracoes);
    });

    test('buscaPorEdNome - deve lançar um erro quando findOne falhar', async () => {
        mockModel.findOne.mockRejectedValue(erroSimulado);
        await expect(eventoRepo.buscaPorEdNome(edNome)).rejects.toThrow(erroSimulado);
    });

    test('buscarTodos - deve lançar um erro quando findAll falhar', async () => {
        mockModel.findAll.mockRejectedValue(erroSimulado);
        await expect(eventoRepo.buscarTodos()).rejects.toThrow(erroSimulado);
    });

    test('buscarPorId - deve lançar um erro quando findByPk falhar', async () => {
        mockModel.findByPk.mockRejectedValue(erroSimulado);
        await expect(eventoRepo.buscarPorId(id)).rejects.toThrow(erroSimulado);
    });

    test('idNomeView - deve lançar um erro quando a entrada é inválida', () => {
        expect(() => eventoRepo.idNomeView(null)).toThrow('Evento não fornecido');
    });

    test('deletarPorId - deve lançar um erro quando findByPk não encontrar o evento', async () => {
        mockModel.findByPk.mockResolvedValue(null);
        await expect(eventoRepo.deletarPorId(id)).rejects.toThrow();
    });

    test('deletarPorId - deve lançar um erro quando destroy falhar', async () => {
        const evento = { event_id: id, destroy: jest.fn().mockRejectedValue(erroSimulado) };
        mockModel.findByPk.mockResolvedValue(evento);
        await expect(eventoRepo.deletarPorId(id)).rejects.toThrow(erroSimulado);
    });

    test('atualizarPorId - deve lançar um erro quando findByPk não encontrar o evento', async () => {
        mockModel.findByPk.mockResolvedValue(null);
        await expect(eventoRepo.atualizarPorId(id, alteracoes)).rejects.toThrow();
    });

    test('atualizarPorId - deve lançar um erro quando update falhar', async () => {
        const evento = { event_id: id, update: jest.fn().mockRejectedValue(erroSimulado) };
        mockModel.findByPk.mockResolvedValue(evento);
        await expect(eventoRepo.atualizarPorId(id, alteracoes)).rejects.toThrow(erroSimulado);
    });
});
