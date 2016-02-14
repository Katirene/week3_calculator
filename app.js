var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
//var addition = require('./routes/addition');
//var subtraction = require('./routes/subtraction');
//var multiplication = require('./routes/multiplication');
//var division = require('./routes/division');


app.use(bodyParser.urlencoded({extended: true}));
app.set('port', process.env.PORT || 5000);

//app.use('/routes/addition', addition);
//app.use('/routes/subtraction', subtraction);
//app.use('/routes/multiplication', multiplication);
//app.use('/routes/division', division);

/*app.get('/*', function(req, res) {
    console.log("Here is the request: " , req.params);
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, './public/', file));
});*/

app.listen(app.get('port'), function() {
    console.log('Server is ready on port' + app.get('port'));
});