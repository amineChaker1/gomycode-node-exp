//const os = require("os");
//console.log(os.platform());
//import os from "os";
//console.log(os.platform());
//import fs from "fs";
/*fs.readFile("file.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});*/

import http from "http";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();
const server = http.createServer((req, res) => {
  fs.readFile("file.txt", (err, data) => {
    if (err) throw err;
    res.end(data.toString());
  });
});

server.listen(process.env.PORT, () => {
  console.log(`server started at port ${process.env.PORT} `);
});
