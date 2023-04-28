const allAccess = async (req, res) => {
	res.status(200).send('Public Content.');
};

const userBoard = (req, res) => {
	res.status(200).send('User Content.');
};

const staffBoard = (req, res) => {
	res.status(200).send('Staff Content.');
};

const adminBoard = (req, res) => {
	res.status(200).send('Admin Content.');
};

const demoController = {
	allAccess,
	userBoard,
	staffBoard,
	adminBoard,
};

export default demoController;
