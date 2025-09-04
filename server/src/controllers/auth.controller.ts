import { IUser } from "#models/user.model.js";
import authService from "#services/auth.service.js";
import { Request, Response } from "express";
import asyncErrorWrapper from "express-async-handler";

export const login = asyncErrorWrapper(async (req : Request, res : Response,) => {
    const userData = req.body as IUser;
    const result = await authService.login(userData);
    const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'development', // Set to true in production
        maxAge: 86400000, // 1 day
    }

    res.cookie("auth_token", result.token , cookieOptions);
    res.status(200).json({ userId: result.userId });
});

export const register = asyncErrorWrapper(async (req :Request, res : Response) => {
    const userData = req.body as IUser;
    const newUser = await authService.register(userData);
    res.status(201).json(newUser);
})

export const logout = asyncErrorWrapper((req, res) => {
    res.cookie("auth_token", "", { maxAge: 0 , expires: new Date(0)});
    res.status(200).json({ message: "Logged out successfully" });
});