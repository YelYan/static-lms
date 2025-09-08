import * as authController from "#controllers/auth.controller.js";
import { forgotPassSchemaValidate, loginSchemaValidate , userSchemaValidate  } from "#data/request.schemas.js";
import validateRequest from "#middleware/validate.request.js";
import {Router} from "express";

const router = Router();

router.post("/login", validateRequest(loginSchemaValidate), authController.login);
router.post("/register", validateRequest(userSchemaValidate), authController.register);
router.post("/forgot-password", validateRequest(forgotPassSchemaValidate), authController.forgotPassword);
router.post("/logout", authController.logout);

export default router;
