"use strict;"


let express = require('express');

let router = express.Router();
let Item = require('../models/item');

router.get('/', function(req,res){
	Item.getAllItems()
	.then(items => {
		res.send(items);
	})
	.catch(err => {
		res.status(400).send(err);
	});
});

router.get('/:id', function(req,res){
	Item.getOneItem(req.params.id)
	.then(item => {
		res.send(item);
	})
	.catch(err => {
		res.status(400).send(err);
	});
});

router.post('/', function(req,res){
	Item.insertItem(req.body)
	.then(confirmation => {
		res.send(confirmation);
	})
	.catch(err => {
		res.status(400).send(err);
	});
});

router.put('/:id', function(req,res){
	Item.updateItem(req.params.id, req.body)
	.then(confirmation => {
		res.send(confirmation);
	})
	.catch(err => {
		res.status(400).send(err);
	});
});

router.delete('/:id', function(req,res){
	Item.deleteItem(req.params.id)
	.then(confirmation => {
		res.send(confirmation);
	})
	.catch(err => {
		res.status(400).send(err);
	});
});



















module.exports = router;

