## To Do:

* Dig out and display load average
* ~~Add Google analytics~~
* ~~Make getnetperfinfo() return a list of statistics ad their legends, so index.html can do {{#each ...}}~~
* Display bandwidth used and cap for month?
* Create a daily task to summarize all the hits for the day and write to a database
* Delete previous day's log files to keep the directory small
* Create upstart task for 'node app' [kvz blog](http://kvz.io/blog/2009/12/15/run-nodejs-as-a-service-on-ubuntu-karmic/)
* Create upstart task for netserver as well
* Document the virtual host machinery better
* Delete blog.js file
* Find out how to create jquery-2.0.2.min.map
* Add repo info to package.json, and fix up name, description, etc.
* ~~Add date to the "Stats for netperf.richb-hanover.com"~~
* Create DNS for netperf6, document it in the index.html page

**Scripts**

* ~~Update netperfrunner.sh to use summarize_pings()~~
* Enable ECN on netperf
* Add in initial ping to netperf
* Ignore first 25 sec of download to eliminate Speedboost
* speedtest.sh use two streams at once in same direction?
* add "-m" parameter to betterspeedtest.sh to include message in output
* git retrieve in CeroWrt without https?