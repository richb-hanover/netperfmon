exports.getnetperfinfo = function() {
	var fs = require('fs');
	var path = require('path');
	var os = require('os');
	var _ = require('underscore');

	var t1 = new Date().getTime();
	var filelist = fs.readdirSync( "/tmp");
	var lastmin, last5min, lasthour, lastday, t2;

	var timeList = _.chain(filelist)
		.filter(function(fname){ return fname.indexOf("netserver.debug") == 0 })
		.map(function(fname) { 
			var mt = fs.statSync(path.join("/tmp", fname)).mtime; 
			return mt.getTime(); 
			})
		.value();

	lastmin  = _.filter(timeList, function(ftime) { return ftime > t1-1000*60 }).length;
	last5min = _.filter(timeList, function(ftime) { return ftime > t1-1000*60*5 }).length;
	last15min= _.filter(timeList, function(ftime) { return ftime > t1-1000*60*15 }).length;
	lasthour = _.filter(timeList, function(ftime) { return ftime > t1-1000*60*60 }).length;
	lastday  = _.filter(timeList, function(ftime) { return ftime > t1-1000*60*60*24 }).length;
	t2 = new Date().getTime();

	var la = os.loadavg();
	var la = _.map(la, function(num){return num.toFixed(2) });

	// console.log( lastmin, last5min, lasthour, lastday);
	// console.log(t2 - t1 + " msec");

	var result = [ 
		// { "legend":"Current Time"   , "val": new Date() , "units": ""},
		{ "legend":"Last Minute"    , "val": lastmin    , "units": "accesses"},
		{ "legend":"Last 5 Minutes" , "val": last5min   , "units": "accesses"},
		{ "legend":"Last 15 Minutes", "val": last15min  , "units": "accesses"},
		{ "legend":"Last Hour"      , "val": lasthour   , "units": "accesses"},
		{ "legend":"Last Day"       , "val": lastday    , "units": "accesses"},
		{ "legend":"Elapsed Time"   , "val": t2 - t1    , "units": "msec"},
		{ "legend":"Load Avg-1min"  , "val": la[0]      , "units": ""},
		{ "legend":"Load Avg-5min"  , "val": la[1]      , "units": ""},
		{ "legend":"Load Avg-15min" , "val": la[2]      , "units": ""}
      ];
    return result;
};