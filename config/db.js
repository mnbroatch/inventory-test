"use strict;"

let mysql = require('mysql');

let db = mysql.createConnection( process.env.JAWSDB_URL || {
	host		: 'localhost',
	user		: 'root',
	password: process.env.MYSQL_PASSWORD,
	database: 'inventory'
});

db.connect();

module.exports = db;

