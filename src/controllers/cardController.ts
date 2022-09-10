import { cardtype } from "@prisma/client";
import { Request, Response } from "express";
import * as cardServices from "../services/cardService.js";

export async function createCard(req: Request, res: Response) {
  const {
    title,
    number,
    name,
    securityCode,
    expirationDate,
    password,
    isVirtual,
    type
  }: {
    title: string,
    number: string,
    name: string,
    securityCode: string,
    expirationDate: string,
    password: string,
    isVirtual: boolean,
    type:cardtype
  } = req.body;
  const userId = res.locals.user;
  

  const card = await cardServices.createCard( title,
    number,
    name,
    userId,
    securityCode,
    expirationDate,
    password,
    isVirtual,
    type);
  res.status(200).send(card);
}

export async function searchCard(req: Request, res: Response) {
  const cardId = +req.query.id; // é uma string
  const userId = res.locals.user; // é um numero
  if (!cardId) {
    //se n tiver cardId quero buscar todas as notas
    const card = await cardServices.searchAllCard(userId);
    return res.status(200).send(card);
  }
  //se tiver cardId quero buscar apenas uma nota específica
  const card = await cardServices.searchCardById(cardId);
  res.status(200).send(card);
}

export async function deleteCard(req: Request, res: Response) {
  const cardId = +req.params.id; // é uma string
  const userId = res.locals.user; // é um numero
  if (!cardId) {
    throw { type: "forbidden", message: "invalid note id" };
  }
  await cardServices.deleteCard(userId, cardId);
  res.sendStatus(200);
}
