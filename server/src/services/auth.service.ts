import config from "#config/config.js";
import AuthenticationError from "#errors/AuthenticationError.js";
import User from "#models/user.model.js";
import { IUser } from "#models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class AuthService {
    public async login (userData : IUser) {
        //1. business logic: check user already exist or not
        const existingUser = await User.findOne({ email: userData.email }).select("+password");

        if (!existingUser) {
            const error = new AuthenticationError({
                code: "ERR_AUTH",
                message: "User does not exist",
                statusCode: 404
            });
            throw error
        }

        // 2. Data manipulation: compare passwords
        const isPasswordMatch = await bcrypt.compare(userData.password, existingUser.password);

        if(!isPasswordMatch) {
            const error = new AuthenticationError({
                code: "ERR_VALIDATION",
                message: "Invalid credentials",
                statusCode: 401
            });
            throw error
        }

        // 3. Other actions: Generate JWT token
        const payload = {userId : existingUser._id , email : existingUser.email};
        const token = jwt.sign(payload, config.appSecret as unknown as string, {expiresIn: '1d'});

        return { token , userId: existingUser._id };
    }

    public async register (userData : IUser) {
        //1. business logic: check user already exist or not
        const existingUser = await User.findOne({ email: userData.email })

        if (existingUser) {
            const error = new AuthenticationError({
                code: "ERR_AUTH",
                message: "User already exists",
                statusCode: 409
            });
            throw error
        }

        // 2. Data manipulation: create user
        const newUser = await User.create(userData);

        // 3. Other actions: Maybe send a welcome email via another service
        // await emailService.sendWelcomeEmail(newUser.email);
        return newUser
    }
}

export default new AuthService();