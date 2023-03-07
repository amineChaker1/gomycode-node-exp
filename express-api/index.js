import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import todoRouter from "./routes/todo.js";
const app = express();
dotenv.config();
app.use(bodyParser.json());

app.use("/todo", todoRouter);

app.get("/hello", (req, res) => {
  res.send("world");
});

app.listen(3000, () => {
  console.log("server is running on loacal host 3000");
});
