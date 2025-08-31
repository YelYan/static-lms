import config from "#config/config.js";
import { getErrorMessages } from "#utils/utils.js";
import { NextFunction, Request, Response  } from "express";

export default function errorHandler (
    error : unknown,
    req : Request,
    res : Response,
    next : NextFunction
) {

    if(res.headersSent || config.debug) {
        next(error)
        return 
    }

    console.error(error);

    const statusCode = typeof error === "object" && error !== null && "statusCode" in error && typeof (error as { statusCode?: unknown }).statusCode === "number"
        ? (error as { statusCode: number }).statusCode
        : 500;
    const message = getErrorMessages(error) || "An error occurred. Please view logs for more details!";

    res.status(statusCode).json({ message });
} 