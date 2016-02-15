var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');

router.post('/', function(req, res) {
    console.log(req.body);
    res.send("Subtraction Route sent");
});

module.exports = router;