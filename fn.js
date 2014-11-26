var FN = require('./smartjs-fn');

fn = new FN({
	src: './smartjs/demo',
	selector: '**/*.html',
	dist: './__cache__/'
});

fn.run();