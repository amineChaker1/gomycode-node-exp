const express = require("express");
const dotenv = require("dotenv");
const postRouter = require("./routes/posts.js");
dotenv.config();
const app = express();

app.use(express.json());

app.use("/posts", postRouter);

app.listen(process.env.PORT, () => {
  console.log("server is running on port " + process.env.PORT);
});
