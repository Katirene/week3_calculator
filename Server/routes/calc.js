var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var math = require('mathjs');

router.post('/', function(req, res) {
    console.log(req.body);
    res.send(math.eval(req.body.expression));

});

module.exports = router;


