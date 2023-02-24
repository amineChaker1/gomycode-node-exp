//how to run a server on the loval host and use it
const http = require("http");
/* create server takes a callback function and its gonna run everytime a request come is in
 and it gives us access to two objects req and res and they come loaded with information 
 about the request and the response */
//everything inside create server runs on the server not on the browser bc it is not send
const server = http.createServer((req, res) => {
  console.log("request made");
});
server.listen(3000, () => {
  console.log("listening to the server on port 3000");
});
