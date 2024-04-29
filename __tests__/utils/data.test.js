import dataUtils from '../../app/utils/data.util';
import moment from 'moment';

describe('dataUtils', () => {
    const data = new Date(2020, 0, 1); // 1 de Janeiro de 2020
    const dataString = '2020-01-01';
    const dataFormatada = '01/01/2020';
    const dataFormatadaConsole = '2020-01-01 00:01:00';

    test('dataParaString deve formatar uma data para o formato DD/MM/YYYY', () => {
        expect(dataUtils.dataParaString(data)).toBe(dataFormatada);
    });

    test('dataParaStringConsole deve formatar uma data para o formato YYYY-MM-DD HH:MM:SS', () => {
        expect(dataUtils.dataParaStringConsole(data)).toBe(dataFormatadaConsole);
    });

    test('stringParaData deve converter uma string de data para um objeto Date', () => {
        const dataConvertida = dataUtils.stringParaData(dataString);
        expect(moment(dataConvertida).format('YYYY-MM-DD')).toBe(dataString);
    });
});
