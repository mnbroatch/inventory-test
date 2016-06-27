"use strict";
const PORT = process.env.PORT || 8000;

const express = require('express');
const morgan = require('morgan');

let app = express();

let Item = require('./models/item')

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(morgan('dev'));
app.use('/items', require('./routes/items'));

app.get('/', function(req,res){
	res.render('index');
});

app.listen(PORT, function(err){
	console.log(err || `server started port ${PORT}`);
});
