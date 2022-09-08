import {Request,Response, NextFunction } from "express";


export default function errorHandler(error, req:Request, res:Response, next: NextFunction){
    console.log("sou do handler");
    if (error.type==='not_found') return res.status(404).send(error.type.message)
    if (error.type==='forbidden') return res.status(401).send(error.type.message)
    if(error.type==='conflict') return res.status(409).send(error.type.message)
    return res.sendStatus(500)

}