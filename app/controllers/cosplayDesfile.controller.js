import { coresLog } from '../constants/coresLog.constant.js';
import cosplayDesfileService from '../services/cosplayDesfile.service.js';

const criar = async (req, res) => {
	try {
		const resposta = await cosplayDesfileService.criar(
			req.body.competidor,
			req.body.apresentacao,
			req.body.participacao,
			req.body.cospDesfile
		);

		return res
			.status(resposta.status)
			.send(resposta.message);
	} catch (erro) {
		if (erro.status) {
			console.log(
				`${coresLog.FgRed}${erro.date}: ${erro.message}${coresLog.Reset}`
			);
			return res.status(erro.status).send(erro.message);
		}
		console.log(
			`${coresLog.FgRed}${erro}${coresLog.Reset}`
		);
		return res.status(500).send(erro.message);
	}
};

const cosplayDesfileController = {
	criar,
};

export default cosplayDesfileController;
