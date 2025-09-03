import { NextFunction,Request, Response } from "express";
import { ObjectSchema } from "joi";

export default function validateRequest<T>(schema: ObjectSchema<T>) {
    return async function validator(req: Request, res: Response, next: NextFunction) {
        const validated: T = await schema.validateAsync(req.body, {
            abortEarly: true
        });
        req.body = validated;
        next();
    }
}