const express = require('express');
const router = express.Router();
const app = require('../app.js'); 

/* GET home page. */
router.get('/', (req, res, next) => {
    if (req.query.word != null) {
        app.getUpc(req, res, next);
    }
    res.render('index', {
        title: 'Project3',
    })
});

module.exports = router;