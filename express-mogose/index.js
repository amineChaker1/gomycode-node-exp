import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import todoRouter from "./routes/todo.js";
import mongoose from "mongoose";
dotenv.config();

mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGO_URL, (err) => {
  if (err) return console.log(err);
  console.log("connected to database");
});

const app = express();

app.use(express.json());

app.use("/auth", userRouter);
app.use("/todo", todoRouter);

app.listen(3005, () => {
  console.log("server is running on port 3005");
});
