var Facebook = require('facebook-node-sdk');
var facebook = new Facebook({ appId: '176828909063133', secret: '62e60dce697058a669585ac30eea1188' });

var http = require('http');
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type':'text/plain'});
	facebook.api('/me', function(err,data){
		console.log(data);
		res.end('\n');
	});
}).listen(1337, '127.0.0.1');