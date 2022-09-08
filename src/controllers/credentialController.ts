import { Request, Response } from "express";
import * as credentialService from "../services/credentialService.js";

export async function createCredential(req: Request, res: Response) {
  const {
    title,
    url,
    username,
    password
  }: { title: string, url: string, username: string, password: string } =
    req.body;
    const userId = res.locals.user
    console.log("res.locals: ", res.locals )
  await credentialService.createCredential(title,url,username,password, userId);
  res.sendStatus(201);
}
