const fs = require("fs");
// reading files
/* the second function fires after the reading is done and it takes two 
args err and data and it is async so it takes some time to complete*/
fs.readFile("./docs/blog.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});

// writing files
fs.writeFile("./docs/written.txt", "hello , world", () => {
  console.log("file was written");
});

//deleting files
if (fs.existsSync("./docs/delteme.txt")) {
  fs.unlink("./docs/delteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
