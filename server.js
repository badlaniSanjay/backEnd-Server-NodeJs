var express = require('express');
var app = express();


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "http://localhost:4200");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get('/hello', function(req, res){
    res.send('hello world');
});

var studentService = require('./services/student.service.server.js');
studentService(app)
const questionService = require('./services/question.service.server.js')(app);
const answerService = require('./services/answer.service.server.js')(app);

app.listen(3000);
