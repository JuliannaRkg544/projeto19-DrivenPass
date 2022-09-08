import { Response, Request, NextFunction } from "express";
import { authSchema } from "../schemas/authSchema.js";

export default function authValidator(req:Request, res:Response, next:NextFunction){
    const authUser  = req.body  
    const authValidation = authSchema.validate(authUser)
    if (authValidation.error){
        console.log(authValidation.error.details)
        return res.status(422).send(authValidation.error.details)
    }
    next()
}