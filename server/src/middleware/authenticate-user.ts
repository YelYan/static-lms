import config from "#config/config.js";
import AuthenticationError from "#errors/AuthenticationError.js";
import { NextFunction, Request, Response } from "express";
import jwt,{ JwtPayload } from "jsonwebtoken";

const authenticateUser = (req :Request, res :Response, next:NextFunction) => {
    const authHeader = req.headers.authorization;

    // if authorization header is missing and do not contain a valid token
    if(!authHeader?.startsWith("Bearer")) {
        throw new AuthenticationError({
            code : "ERR_AUTH",
            message : "Authorization header missing or malformed",
            statusCode : 401,
        })
    }

    const token = authHeader.split(" ")[1]; // get jwt token

    try {
        const decoded = jwt.verify(token, config.appSecret);
        req.auth = {payload : decoded as JwtPayload, token }
        next()
    } catch {
          throw new AuthenticationError({
            code : "ERR_AUTH",
            message : "You are not authorized to perform this operation",
            statusCode : 403,
          })
    }
}

export default authenticateUser