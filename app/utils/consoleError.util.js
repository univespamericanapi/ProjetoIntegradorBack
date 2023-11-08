import { coresLog } from "../constants/coresLog.constant.js";

const consoleError = (error) => {
    if (error.status) {
        console.error(`${coresLog.BgRed}Erro: (${error.status}) ${error.consoleLog}${coresLog.Reset}`);
    } else {
        console.error(`${coresLog.BgRed}${error}${coresLog.Reset}`);
    }
};

export default consoleError;