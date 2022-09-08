import { Request, Response } from "express";
import { signUser } from "../services/authService";
import * as authService from "../services/authService.js";

export async function signup(req: Request, res: Response) {
  const { email, password }: { email: string; password: string } = req.body;

  await authService.signupUser(email, password);

  res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {
  const { email, password }: { email: string; password: string } = req.body;
  try {
    await authService.signUser(email, password);

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
