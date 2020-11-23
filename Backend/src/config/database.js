const sql = require('mssql');
const config = {
    user: 'root',
    password: '1234',
    server: 'localhost\\MSSQLSERVER2',
    database: 'Northwind',
    options: {
    encrypt: true,
    enableArithAbort: true
 }
};
exports.config = config;
exports.sql = sql;