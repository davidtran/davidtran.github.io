var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');
var cors = require('cors');
var router = express.Router();
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(router);
app.use(cors());
require('./passport.js')(passport);
require('./routes/home.js')(app, passport);

var port = process.env.PORT || 3000;
app.listen(port);


