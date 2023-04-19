import moment from "moment";

const eData = (data) => (data === undefined && !moment(data, moment.ISO_8601, true).isValid());

const dataParaString = (data) => (moment(data).format('DD/MM/YYYY'));

const stringParaData = (data) => (moment(data, 'YYYY-MM-DD').toDate());

export default dataUtils = {
    eData,
    dataParaString,
    stringParaData,
}