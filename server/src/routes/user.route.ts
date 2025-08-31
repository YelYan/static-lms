import { createUser, getAllUsers } from '#controllers/user.controller.js';
import {Router} from 'express';

const router = Router();

router.post("/create" , createUser)
router.get("/get-all-users" , getAllUsers)

export default router

