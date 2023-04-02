import authJwt from "../middleware/authJwt.js";
import controllerUser from "../controllers/user.controller.js";

const routesUser = app => {
    app.use((req, res, next) => {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept'
        );
        next();
    });

    app.get('/api/all', controllerUser.allAccess);
    app.get('/api/staff', controllerUser.staffBoard);
    app.get('/api/admin', controllerUser.adminBoard);
};

export default user;