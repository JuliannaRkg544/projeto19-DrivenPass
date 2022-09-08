import { Router } from "express";
import { signin, signup } from "../controllers/authController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { authSchema } from "../schemas/authSchema.js";

const authRouter = Router()

authRouter.post("/signup", schemaValidator(authSchema), signup)
authRouter.post("/signin", signin )

export default authRouter
