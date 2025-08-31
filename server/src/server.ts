import apiRouter from "#api/index.js";
import config from "#config/config.js";
import connectDb from "#config/connectDb.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import morgan from "morgan";

const app = express();



await connectDb();

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

 // Mount the entire API router under the '/api' path
app.use("/api/v1" , apiRouter)

// error middlewares must be defined last

// Server runs
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
