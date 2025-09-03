import { createUser, getAllUsers } from '#controllers/user.controller.js';
import { userSchemaValidate } from '#data/request.schemas.js';
import authenticateUser from '#middleware/authenticate-user.js';
import validateRequest from '#middleware/validate.request.js';
import {Router} from 'express';

const router = Router();

router.get("/get-all-user" , getAllUsers)
router.post("/create-user",authenticateUser, validateRequest(userSchemaValidate) , createUser)

export default router

