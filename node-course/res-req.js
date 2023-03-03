const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.write("hi its me ");
});

server.listen(3008, () => {
  console.log("server started");
});
