import jwt from 'jsonwebtoken';
import db from '../models/db.model.js';
import { configRoles } from '../config/role.config.js';
import { configSecret } from '../config/secret.config.js';

const User = db.user;
const { TokenExpiredError } = jwt;

const adminRoleName = configRoles[2];
const staffRoleName = configRoles[1];

const catchError = (err, res) => {
    if (err instanceof TokenExpiredError) {
        return res.status(401).send({
            message: 'Unauthorized! Access Token was expired!'
        });
    }
    return res.status(401).send({
        message: 'Unauthorized!'
    });
};

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).send({
            message: 'No token provided!'
        });
    }

    jwt.verify(token, configSecret, (err, decoded) => {
        if (err) {
            return catchError(err, res);
        }

        req.userId = decoded.id;
        next();
    });
};

const isAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRole().then(role => {
            if (role.name === adminRoleName) {
                next();
                return;
            }

            res.status(403).send({
                message: 'Require Admin Role!'
            });
            return;
        });
    });
}

const isStaff = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRole().then(role => {
            if (role.name === adminRoleName ||
                role.name === staffRoleName) {
                next();
                return;
            }

            res.status(403).send({
                message: 'Require Staff or Admin Role!'
            });
            return;
        });
    });
}

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    isStaff: isStaff
};

export default authJwt;