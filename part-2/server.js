// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {

	var reasons = [
		{reason: "I wear great T-shirts"},
		{reason: "I have many multi-sided dice"},
		{reason: "I guess I also did this templating thing"}
	];

    res.render('pages/index', {
    	reasons: reasons
    });

});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');