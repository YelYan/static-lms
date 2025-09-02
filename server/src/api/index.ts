import authenticateUser from '#middleware/authenticate-user.js';
import userRoutes from '#routes/user.route.js';
import express from 'express';

const router = express.Router();

router.get("/test" , (req, res) => {
    res.send("hello world")
})


router.use("/user", authenticateUser, userRoutes)
export default router;