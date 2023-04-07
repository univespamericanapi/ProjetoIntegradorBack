import db from "../models/db.model.js";

const checkDuplicateUsername = async (req, res, next) => {
    const User = db.user;

    await User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: 'Failed Username is already in use!'
            });
            return;
        }
        next();
    });
};

const checkRoleExisted = async (req, res, next) => {
    const Role = db.role;

    await Role.findOne({
        where: {
            name: req.body.role
        }
    }).then(role => {
        if (!role) {
            res.status(400).send({
                message: 'Failed! Role does not exist = ' + req.body.role
            });
            return;
        }
        next();
    });
};

const verifySignUp = {
    checkDuplicateUsername,
    checkRoleExisted
};

export default verifySignUp;