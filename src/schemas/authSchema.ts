import Joi from "joi";
import { UserData } from "../repository/authRepository.js";

export const authSchema = Joi.object<UserData>({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required(),
});
