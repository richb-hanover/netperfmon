var express = require('express');
var app = express();

var hbs = require('hbs');

var blogEngine = require('./blog');
var netperfStats = require('./netperfmon');

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.use(express.bodyParser());

app.use(express.static('public'));

app.get('/', function(req, res) {
//	res.render('index',{title:"My Blog", entries:blogEngine.getBlogEntries()});
	res.render('index', {title:"NetPerfMon", netperfstats:netperfStats.getnetperfinfo()});
});

app.get('/about', function(req, res) {
	res.render('about', {title:"About Me"});
});

app.get('/article/:id', function(req, res) {
	var entry = blogEngine.getBlogEntry(req.params.id);
	res.render('article',{title:entry.title, blog:entry});
});

app.listen(3000);