/* IMPORTAR O EXPRESS */

var express = require('express');

var consign = require('consign');

var bodyParser = require('body-parser');

var expressValidator = require('express-validator');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

/* middlewares */

app.use(expressValidator());

app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({extended: true}));


/* consign, autoload das rotas, dos models e controllers para o app */

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* exportando app */

module.exports = app;