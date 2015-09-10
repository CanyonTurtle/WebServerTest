http = require("http");
fs = require("fs");

port = process.argv[2];
file_location = process.argv[3];

var server = http.createServer(function(request, response) {
  stream = fs.createReadStream(file_location);
  stream.pipe(response)
});

server.listen(port);
