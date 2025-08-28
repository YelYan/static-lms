import apiRouter from "#api/index.js";
import express from "express";

const app = express();

const port =  process.env.PORT ?? "9000";


 // Mount the entire API router under the '/api' path
app.use("/api/v1" , apiRouter)

// Server runs
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
