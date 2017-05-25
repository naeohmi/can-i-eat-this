const express = require('express');
const router = express.Router();
const getInfo = require('./getInfo.js'); 
const auth = require('./auth.js');
var db = require('../db/queries');

console.log('index.js is up!');

/* GET home page. */
router.get('/', (req, res, next) => {
    // if (req.query.word != null) {
        //HARD CODING THIS NOW JUST FOR TESTING PURPOSES//
        // api.getInfo(048500021125);
        // auth.userAuth();
    // }
    console.log('awake');
    res.render('index', {
        title: 'Can I eat this?',
    })
});

module.exports = router;