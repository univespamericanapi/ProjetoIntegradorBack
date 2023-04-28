import moment from 'moment';

const dataParaString = (data) => moment(data).format('DD/MM/YYYY');

const dataParaStringConsole = (data) =>
	moment(data).format('YYYY-MM-DD HH:MM:SS');

const stringParaData = (data) => moment(data, 'YYYY-MM-DD').toDate();

const dataUtils = {
	dataParaString,
	dataParaStringConsole,
	stringParaData,
};

export default dataUtils;
