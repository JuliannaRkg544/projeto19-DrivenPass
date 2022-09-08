import { Router } from "express";
import { signin, signup } from "../controllers/authController.js";
import authValidator from "../middlewares/authMiddleware.js";

const authRouter = Router()

authRouter.post("/signup", authValidator, signup)
authRouter.post("/signin", signin )

export default authRouter
