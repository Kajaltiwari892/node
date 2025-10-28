const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/about") {
    res.end("there is no about pge");
  }

  res.end("hello wrld");
});

server.listen(7777);
