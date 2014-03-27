exports.getnetperfinfo = function() {
	var fs = require('fs');
	var path = require('path');
	var _ = require('underscore');

	var t1 = new Date().getTime();
	var filelist = fs.readdirSync( "/tmp");
	var lastmin, last5min, lasthour, lastday, t2;

	var timeList = _.chain(filelist)
		.filter(function(fname){ return fname.indexOf("netperfUL") == 0 })
		.map(function(fname) { 
			var mt = fs.statSync(path.join("/tmp", fname)).mtime; 
			return mt.getTime(); 
			})
		.value();

	lastmin  = _.filter(timeList, function(ftime) { return ftime > t1-1000*60 }).length;
	last5min = _.filter(timeList, function(ftime) { return ftime > t1-1000*60*5 }).length;
	lasthour = _.filter(timeList, function(ftime) { return ftime > t1-1000*60*60 }).length;
	lastday  = _.filter(timeList, function(ftime) { return ftime > t1-1000*60*60*24 }).length;
	t2 = new Date().getTime();


	// console.log( lastmin, last5min, lasthour, lastday);
	// console.log(t2 - t1 + " msec");

	return {
        'lastmin': lastmin,
        'last5min' : last5min,
        'lasthour' : lasthour,
        'lastday'  : lastday,
        'telapse'  : t2 - t1,
        'curtime'  : new Date()
        };
	};