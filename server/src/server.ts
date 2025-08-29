import apiRouter from "#api/index.js";
import connectDb from "#config/connectDb.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
const app = express();

const port =  process.env.PORT ?? "9000";

await connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(cookieParser())

 // Mount the entire API router under the '/api' path
app.use("/api/v1" , apiRouter)

// error middlewares

// Server runs
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
