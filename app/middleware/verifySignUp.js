import db from "../models/db.model.js";
import { configRoles } from "../config/role.config.js";

const ROLES = configRoles;
const User = db.user;
const Role = db.role;

const checkDuplicateUsername = async (req, res, next) => {
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
    });

    next();
};

const checkRoleExisted = async (req, res, next) => {
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
    });

    next();
};

const checkRolesExisted = (req, res, next) => {
    if (req.body.role) {
            if (!ROLES.includes(req.body.role)) {
                res.status(400).send({
                    message: 'Failed! Role does not exist = ' + req.body.role
                });
                return;
            }
    }

    next();
};

const verifySignUp = {
    checkDuplicateUsername: checkDuplicateUsername,
    checkRoleExisted: checkRoleExisted
};

export default verifySignUp;