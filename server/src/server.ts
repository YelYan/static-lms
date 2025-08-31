import apiRouter from "#api/index.js";
import config from "#config/config.js";
import connectDb from "#config/connectDb.js";
import errorHandler from "#middleware/errHandler.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { Request, Response  } from "express";
import morgan from "morgan";

const app = express();

// Connect to database
await connectDb();

// Middleware
app.disable("x-powered-by");
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.get("/" , (req : Request,res : Response) => {
  return res.status(200).json({
    environment : config.env,
    ok : true,
  })
})

 // Mount the entire API router under the '/api' path
app.use("/api/v1" , apiRouter)

// error middlewares must be defined last
app.use(errorHandler)

// Server runs
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port.toString()}`);
});
