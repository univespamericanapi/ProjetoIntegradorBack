import db from "../models/db.model.js";
import { configDB } from "../config/db.config.js";

const ROLES = configDB.roles;
const User = db.user;

const checkDuplicateUsername = (req, res, next) => {
    User.findOne({
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

const checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        req.body.roles.forEach(role => {
            if (!ROLES.includes(role)) {
                res.status(400).send({
                    message: 'Failed! Role does not exist = ' + role
                });
                return;
            }
        });
    }

    next();
};

const verifySignUp = {
    checkDuplicateUsername: checkDuplicateUsername,
    checkRolesExisted: checkRolesExisted
};

export default verifySignUp;