import dataUtils from '../utils/data.util.js';

export default class CustomError extends Error {
	constructor(status = 500, ...params) {
		super(...params);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, CustomError);
		}

		this.name = 'CustomError';

		this.status = status;
		this.date = dataUtils.dataParaStringConsole(new Date());
		this.consoleLog = `${this.message}`;
	}
}
