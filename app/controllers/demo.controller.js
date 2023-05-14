const allAccess = async (req, res) => {
	res.status(200).send('Bem vindo a sistema de concursos da Avalon Eventos.');
};

const userBoard = (req, res) => {
	res.status(200).send('User Content.');
};

const staffBoard = (req, res) => {
	res.status(200).send('Staff Content.');
};

const adminBoard = (req, res) => {
	res.status(200).send('Bem vindo ao controle do administrador.');
};

const demoController = {
	allAccess,
	userBoard,
	staffBoard,
	adminBoard,
};

export default demoController;
