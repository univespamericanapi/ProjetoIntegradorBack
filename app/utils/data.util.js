import moment from 'moment';

const dataParaString = (data) => moment(data).format('DD/MM/YYYY');

const dataParaStringConsole = (data) =>
	moment(data).format('YYYY-MM-DD HH:MM:SS');

const stringParaData = (data) => {
	return moment(data, 'DD-MM-YYYY').toDate();
};

const dataUtils = {
	dataParaString,
	dataParaStringConsole,
	stringParaData,
};

export default dataUtils;
