import { IUser } from "#models/user.model.js";
import authService from "#services/auth.service.js";
import { Request, Response } from "express";
import asyncErrorWrapper from "express-async-handler";

export const login = asyncErrorWrapper(async (req : Request, res : Response) => {
    const userData = req.body as IUser;
    const result = await authService.login(userData);
    const cookieOptions = {
        httpOnly: true, // Cookie accessible only by the web server
        secure: process.env.NODE_ENV === 'development', // Set to true in production
        maxAge: 86400000, // 1 day
        // sameSite: true // Helps protect against CSRF attacks
    }

    res.cookie("token", result.token , cookieOptions);
    res.status(200).json({ userId: result.userId , message : "Logged in successfully" });
});

export const register = asyncErrorWrapper(async (req :Request, res : Response) => {
    const userData = req.body as IUser;
    const newUser = await authService.register(userData);
    res.status(201).json({user : newUser , message : "Register successfully"});
})

export const logout = asyncErrorWrapper((req, res) => {
    res.cookie("token", "", { maxAge: 0 , expires: new Date(0)});
    res.status(200).json({ message: "Logged out successfully" });
});

export const forgotPassword = asyncErrorWrapper(async (req : Request, res : Response) => {
    const {email} = req.body as {email : string};
    const result = await authService.forgotPassword(email);
})