var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');

router.post('/', function(req, res) {
    console.log(req);
    //space = '';
    //String.fromCharCode(32) = space;
    //console.log(req.body[3]);
    res.send("Addition Route sent");
});

module.exports = router;


