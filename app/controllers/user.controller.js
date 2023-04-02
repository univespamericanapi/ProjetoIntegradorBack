const allAccess = (req, res) => {
    res.status(200).send('Public Content.')
};

const staffBoard = (req, res) => {
    res.status(200).send('User Content.')
};

const adminBoard = (req, res) => {
    res.status(200).send('Admin Content.')
};

const controllerUser = {
    allAccess: allAccess,
    staffBoard: staffBoard,
    adminBoard: adminBoard
};

export default controllerUser;