import express from "express";

const app = express();

const port =  process.env.PORT ?? "9000";

app.get("/", (req, res) => {
  res.send("Hello world");
  console.log("hello world");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
