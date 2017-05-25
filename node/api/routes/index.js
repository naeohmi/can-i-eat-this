var express = require('express');
var router = express.Router();
// requiring the Backend JavaScript file from folder db
var db = require('../db/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Can I eat This' });
});



module.exports = router;
