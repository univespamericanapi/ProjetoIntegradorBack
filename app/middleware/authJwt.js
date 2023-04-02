import jwt from 'jsonwebtoken';
import { configAuth } from '../config/auth.config.js';
import db from '../models/db.model.js';
import { configDB } from '../config/db.config,js';

const User = db.user;
const { TokenExpiredError } = jwt;

const adminRoleName = configDB.roles[1];
const stafRoleName = configDB.roles[0];

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

    jwt.verify(token, configAuth.secret, (err, decoded) => {
        if (err) {
            return catchError(err, res);
        }

        req.userId = decoded.id;
        next;
    });
};

const isAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            roles.forEach(role => {
                if (role.name === adminRoleName) {
                    next();
                    return;
                }
            });

            res.status(403).send({
                message: 'Require Admin Role!'
            });
        });
    });
};

const isStaff = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
            roles.forEach(role => {
                if (role.name === adminRoleName ||
                        role.name === stafRoleName) {
                    next();
                    return;
                }
            });

            res.status(403).send({
                message: 'Require Staff or Admin Role!'
            });
        });
    });
};

const authJwt = {
    verifyToken: verifyToken,
    isAdmin: isAdmin,
    isStaff: isStaff
};

export default authJwt;