import { Request, Response } from "express";
import * as authService from "../services/authService.js";

export async function signup(req: Request, res: Response) {
  const { email, password }: { email: string; password: string } = req.body;

  await authService.signupUser(email, password);

  res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {
  const { email, password }: { email: string; password: string } = req.body;

  const userLoged = await authService.signinUser(email, password);

  res.status(200).send(userLoged);
}
