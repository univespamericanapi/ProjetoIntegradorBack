// Rename this file to db.config.js
// Data Base configs
export const configDB = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    dbname: 'databasename',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}