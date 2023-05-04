import authService from '../services/auth.service.js';

const login = async (req, res) => {
	try {
		const resposta = await authService.login(req.body);

		return res.status(resposta.status).send(resposta.message);
	} catch (erro) {
		if (erro.status) {
			return res.status(erro.status).send(erro.message);
		}
		return res.status(500).send(erro.message);
	}
};

const refreshToken = async (req, res) => {
	try {
		const resposta = await authService.refreshToken(req.body.refreshToken);

		return res.status(resposta.status).send(resposta.message);
	} catch (erro) {
		if (erro.status) {
			return res.status(erro.status).send(erro.message);
		}
		return res.status(500).send(erro.message);
	}
};

const authController = {
	login,
	refreshToken,
};

export default authController;
