import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
dotenv.config();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/", (req, res) => {
  const message = req.body;
  console.log(`hello ${message}`);
  if (!message.name)
    return res.status(400).json({ message: "name is required" });
  res.json({
    firstmessage: "hello",
    yourmessage: message,
  });
});
app.post("/:name", (req, res) => {
  const { name } = req.params;
  if (!name) return res.status(400).json({ message: "name is required" });
  res.json({
    message: "hello",
    yourmessage: name,
  });
});
app.listen(process.env.PORT, () =>
  console.log(`server runing on port ${process.env.PORT} `)
);

/*import express from "express";
import dotenv from "dotenv";
const app1 = express();
dotenv.config()
app1.get("/", (req, res) => {
  res.send("hello world");
});

app1.listen(process.env.PORT, () => {
  console.log(`the server is running on ${process.env.PORT}`);
});*/
