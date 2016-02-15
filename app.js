var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var calc = require('./server/routes/calc');


app.use(bodyParser.urlencoded({extended: true}));
app.set('port', process.env.PORT || 5000);

app.use('/calc', calc);

app.get('/*', function(req, res) {
    console.log("Here is the request: " , req.params);
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '/server/public', file));
});

app.listen(app.get('port'), function() {
    console.log('server is ready on port' + app.get('port'));
});