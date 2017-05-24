const express = require('express');
const router = express.Router();
const api = require('./api.js'); 

/* GET home page. */
router.get('/', (req, res, next) => {
    // if (req.query.word != null) {

        //HARD CODING THIS NOW JUST FOR TESTING PURPOSES//
        api.getInfo(048500021125);
    // }
    console.log('awake');
    res.render('index', {
        title: 'Project3',
    })
});

module.exports = router;