var express = require('express');
var app = express();

var hbs = require('hbs');

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
	res.render('about', {title:"About This Site"});
});

app.listen(3000);