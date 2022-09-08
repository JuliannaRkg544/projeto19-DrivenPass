import { Request, Response } from "express";
import { number } from "joi";
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

export async function getCredentials(req: Request, res: Response) {
  const userId = res.locals.user
  const credentialId = +req.query.id
  if (!credentialId){
    const credentials = await credentialService.getAllCredentials( userId)
    return res.status(200).send(credentials)
  }
  const credentials = await credentialService.getCredentialById(credentialId) 
  res.status(200).send(credentials)
}
