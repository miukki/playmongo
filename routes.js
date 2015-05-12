var http = require('http')
http.createServer(function(req, res) {
var  _url;
req.method = req.method.toUppercase();

if (req.method !== 'GET') {
  res.writeHead(501, { 'Content-Type': 'text/plain'});
  return res.end(req.method + 'is not available');
}


if (_url = /^\/employee$/i.exec(req.url)) {
  //send json with full data

} else if (_url = /^\/employee\/(\d+)$/i.exec(req.url))  {
  //play with _url[1] , filter by id
} else {

  res.writeHead(200, {'Content-Type': 'text/plain'})
  return res.end('static file maybe send')//for example html
}

});
