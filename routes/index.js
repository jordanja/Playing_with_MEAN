var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express',
        name: 'jordan',
        apikey: 'AIzaSyDDevEIaBuH93BfqsocLz8AZMZkPkS_638'
    });
});

function test(){
    console.log('hellonow')
}


module.exports = router;
