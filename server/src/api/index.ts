import userRoutes from '#routes/user.route.js';
import express from 'express';

const router = express.Router();

router.get("/test" , (req, res) => {
    res.send("hello world")
})
router.use("/user", userRoutes)
export default router;