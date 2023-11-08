import { coresLog } from "../constants/coresLog.constant.js";

const consoleError = (error) => {
    console.log(`${coresLog.BgRed}${error}${coresLog.Reset}`);
};

export default consoleError;