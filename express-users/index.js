import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/auth", userRouter);

app.listen(3005, () => {
  console.log("server is running on port 3005");
});
