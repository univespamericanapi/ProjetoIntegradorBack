//Rename this file to db.config.js

export const configDB = {
    host: 'localhost',
    user: 'root',
    password: '123456789',
    dbname: 'testdb',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    roles: ['staff', 'admin']
}