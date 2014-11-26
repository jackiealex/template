var express = require('express');
var app = express();

var template = require('./smartjs/template');

template.config({
	src: './smartjs/demo/',
	cacheDir: './__cache__',
	cacheMode: 'production' || 'development',
	keepComments: true
});

template.helper('hello', function(str) {
	return 'hello, ' + str;
});

app.use('/st', express.static('./smartjs/static'));

app.get('/extends', function(req, res) {
	var html = template.renderFile('extends_block/child.html', {
		name: ' fsdf - weqeqw <h2>11</h2>',
		o: {
			name: 'parent name display',
			kk: 'waccc',
			jige: '23123'
		}
	});
	res.send(html);
});


app.get('/include', function(req, res) {
	var html = template.renderFile('include/include.html', {
		o: '123'
	});
	res.send(html);
});

app.listen(8880);