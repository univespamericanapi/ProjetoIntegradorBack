import db from '../models/db.model.js';
import { configAuth } from '../config/auth.config.js';
import { configSecret } from '../config/secret.config.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const { user: User, role: Role, refreshToken: RefreshToken } = db;
const Op = db.Sequelize.Op;

const signup = (req, res) => {
    User.create({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8),
        name: req.body.name,
        lastName: req.body.lastName
    }).then(user => {
        if (req.body.role) {
            Role.findOne({
                where: {
                    name: req.body.role
                }
            }).then(role => {
                user.setRole(role).then(() => {
                    res.send({ message: 'User was registered successfully!' });
                });
            });
        } else {
            user.setRole([1]).then(() => {
                res.send({ message: 'User was registered successfully!' });
            });
        }
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

const signin = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(async user => {
        if (!user) {
            return res.status(404).send({
                message: 'User Not found.'
            });
        }

        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.status(401).send({
                accessToken: null,
                message: 'Invalid Password!'
            });
        }

        const token = jwt.sign({ id: user.idUser }, configSecret, {
            expiresIn: configAuth.jwtExpiration
        });

        let refreshToken = await RefreshToken.createToken(user);

        let authority = "";
        user.getRole().then(role => {
            authority = 'ROLE_' + role.name.toUpperCase();

            res.status(200).send({
                idUser: user.idUser,
                username: user.username,
                name: user.name,
                lastName: user.lastName,
                role: authority,
                accessToken: token,
                refreshToken: refreshToken
            });
        });
    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
};

const refreshToken = async (req, res) => {
    const { refreshToken: requestToken } = req.body;

    if (requestToken == null) {
        return res.status(403).send({ message: 'Refresh Token is required!' });
    }

    try {
        let refreshToken = await RefreshToken.findOne({
            where: { token: requestToken }
        });

        if (!refreshToken) {
            return res
                .status(403)
                .send({ message: 'Refresh token is not in database!' });
        }

        if (RefreshToken.verifyExpiration(refreshToken)) {
            RefreshToken.destroy({ where: { id: refreshToken.id } });

            return res.status(403).send({
                message: 'Refresh token was expired. Please make a new signin request!'
            });
        }

        const user = await refreshToken.getUser();
        let newAccessToken = jwt.sign({ id: user.idUser }, configSecret, {
            expiresIn: configAuth.jwtExpiration
        });

        return res.status(200).send({
            accessToken: newAccessToken,
            refreshToken: refreshToken.token
        });
    } catch (err) {
        return res.status(500).send({ message: err });
    }
};

const controllerAuth = {
    signup: signup,
    signin: signin,
    refreshToken: refreshToken
};

export default controllerAuth;