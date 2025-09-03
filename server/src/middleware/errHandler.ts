import config from "#config/config.js";
import CustomError from "#errors/customError.js";
import { getErrorMessages } from "#utils/utils.js";
import { NextFunction, Request, Response  } from "express";
import Joi from "joi";

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

    if(Joi.isError(error)){
        const validationError :ValidationError = {
            error : {
                message : "Validation error",
                code : "ERR_VALIDATION",
                errors : error.details.map((item) => ({
                    message : item.message
                }))
            }
        }
        res.status(422).json(validationError)
        return;
    }

    if(error instanceof CustomError){
        res.status(error.statusCode).json({
            error : {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                code : error.code,
                message : error.message,
            }
        })
        return;
    }


    const message = getErrorMessages(error) || "An error occurred. Please view logs for more details!";

    res.status(500).json({  
        error : {
            message,
        }
    });
} 