//Rename this file to db.config.js

export const HOST = 'localhost'
export const USER = 'root'
export const PASSWORD = '123456789'
export const DB = 'testdb'
export const dialect = 'mysql'
export const pool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
}
