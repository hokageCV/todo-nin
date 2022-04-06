var express = require('express');
var bodyParser = require('body-parser');
var todoController = require('./controllers/todoController');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//template engine
app.set('view engine', 'ejs');

//static files
app.use( express.static('public') );

//call controllers
todoController(app);

//port listen
app.listen(3000);
console.log( 'listening on port 3000  ' );