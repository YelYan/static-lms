import { IUser } from "#models/user.model.js";
import UserService from "#services/user.service.js";
import { Request, Response } from "express";
import asyncErrorWrapper from "express-async-handler"

export const createUser = asyncErrorWrapper(async (req : Request, res : Response) => {
    const userData = req.body as IUser;
    const newUser = await UserService.createUser(userData);
    res.status(201).json(newUser);
})

export const getAllUsers = asyncErrorWrapper(async(req :Request, res : Response) => {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
})


