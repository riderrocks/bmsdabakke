var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/submit', function(req, res, next) {
	res.render('submit');
});

router.post('/newuser', function(req, res) {

    var db = req.db;
    var userName = req.body.uname;
    var userEmail = req.body.email;
    var message = req.body.msg;
    var collection = db.get('usercollection');

    collection.insert({
        "username" : userName,
        "email" : userEmail,
        "message" : message
    }, function (err, doc) {
        if (err) {
            console.log('failed');
            res.send("There was a problem adding the information to the database.");
        }
        else {
            res.redirect("/submit");
        }
    });
});

router.get('/userlist', function(req,res) {
	var db = req.db;
	var collection = db.get('usercollection');
	collection.find({},{}, function(e,docs) {
		res.render('userlist', {
			"userlist" : docs
		});
	});
});

module.exports = router;
