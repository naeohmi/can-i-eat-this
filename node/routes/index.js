const express = require('express');
const router = express.Router();
const getInfo = require('./getInfo.js'); 
const auth = require('./auth.js');
var db = require('../db/queries');

console.log('index.js is up!');

/* GET home page. */
router.get('/', (req, res, next) => {

    console.log('awake');
    res.render('index', {
        title: 'Can I eat this?',
    })
});

module.exports = router;