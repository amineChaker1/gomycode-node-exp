import express from "express";
import dotenv from "dotenv";
import postsRouter from "./routes/posts.js";
dotenv.config();
const app = express();

app.use(express.json());

app.use("/posts", postsRouter);

app.listen(3005, () => {
  console.log("server is running on port 3005 ");
});
