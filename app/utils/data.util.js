import moment from "moment";

const eData = (data) => (data === undefined && !moment(data, moment.ISO_8601, true).isValid());

const dataParaString = (data) => (moment(data).format('DD/MM/YYYY'));

const dataParaStringConsole = (data) => (moment(data).format('YYYY-MM-DD'));

const stringParaData = (data) => (moment(data, 'YYYY-MM-DD').toDate());

const dataUtils = {
    eData,
    dataParaString,
    dataParaStringConsole,
    stringParaData,
}

export default dataUtils;