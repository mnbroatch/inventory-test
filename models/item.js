let db = require('../config/db');
let uuid = require('uuid');

console.log('this');

db.query(`create table if not exists items(
	id varchar(100),
	name varchar(1000),
	value float,
	room varchar(100)
)`);

exports.getAllItems = function(){
	return new Promise(function(resolve,reject){
		db.query('select * from items', (err,items) => {
			if (err) return reject(err);
			resolve(items);
		});
	});
}

exports.getOneItem = function(id){
	return new Promise(function(resolve,reject){
		db.query('select * from items where id = ?',id, (err,itemArray) => {
			if (err) return reject(err);
			resolve(itemArray[0]);
		});
	});
}

exports.insertItem = function(item){
	item.id = uuid();
	return new Promise( function(resolve,reject){
		db.query('insert into items set ?',item, (err,itemArray) => {
			if (err) return reject(err);
			resolve(item);
		});
	});
}

exports.deleteItem = function(id){
	return new Promise(function(resolve,reject){
		db.query('delete from items where id=?',id, (err) => {
			if (err) return reject(err);
			resolve(`${id} deleted`);
		});
	});
}

exports.updateItem = function(id,item){
	return new Promise(function(resolve,reject){
		db.query('update items set ? where id=?',item, id, (err) => {
			if (err) return reject(err);
			resolve(`${id} updated`);
		});
	});
}





