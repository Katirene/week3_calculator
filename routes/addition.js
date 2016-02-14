var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');

router.post('/', function(req, res) {
   res.send("Addition Route sent");
});

module.export = router;