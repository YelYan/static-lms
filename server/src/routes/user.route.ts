import { createUser, getAllUsers } from '#controllers/user.controller.js';
import {Router} from 'express';

const router = Router();

router.post("/create-user" , createUser)
router.get("/get-all-user" , getAllUsers)

export default router

