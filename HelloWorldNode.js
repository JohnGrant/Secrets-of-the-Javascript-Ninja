var Facebook = require('facebook-node-sdk');
var facebook = new Facebook({ appID: 'YOUR_APP_ID', secret: 'YOUR_APP_SECRET' });

var http = require('http');
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.write('Extra processing\n');
	res.end('Hello World\n');
}).listen(1337, '127.0.0.1');