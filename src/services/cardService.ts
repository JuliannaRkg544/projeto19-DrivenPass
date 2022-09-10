import * as cardRepository from "../repository/cardRepository.js";
import { CardData } from "../repository/cardRepository.js";
import Cryptr from "cryptr";
import { cardtype } from "@prisma/client";

const cryptr = new Cryptr("myTotallySecretKey");

async function createCard(
    title: string,
    number: string,
    name: string,
    userId:any,
    securityCode: string,
    expirationDate: string,
    password: string,
    isVirtual: boolean,
    type:cardtype
) {
  await findCardByUserId(userId, title);

  const criptedPassword: string = cryptrPassword(password);

  const credentialdata: CardData = {
    title,
    number,
    userId,
    name,
    securityCode,
    expirationDate,
    password:criptedPassword,
    isVirtual,
    type
  };
  await cardRepository.insertCard(credentialdata);
}

function cryptrPassword(password: string): string {
  const criptPassword: string = cryptr.encrypt(password);

  return criptPassword;
}
async function findCardByUserId(userId: number, title: string) {
  const userCredentials = await cardRepository.findCardByUserId(
    userId
  );
  console.log("credential by user ", userCredentials);
  if (userCredentials.length > 0) {
    let credentialTittle = userCredentials.map((credential) => {
      return credential.title;
    });
    console.log(credentialTittle);
    if (credentialTittle.includes(title)) {
      throw { type: "forbidden", message: "title name already in use" };
    }
  }
}

async function searchAllCard(userId: number) {
  const card = await cardRepository.findCardByUserId(userId);
  if (card.length === 0) {
    throw { type: "forbidden", message: "not credential for this userid" };
  }
  return card;
}

async function searchCardById(cardId:any) {
  const card = await cardRepository.findCardById(
    cardId
  );
  if (!card) {
    throw { type: "forbidden", message: "not card for this id" };
  }
  return card;
}

async function deleteCard(userId: any, cardId: any) {
  const card = await cardRepository.findCardById(cardId);
  if (!card) {
    throw { type: "forbidden", message: "does not exist" };
  }
  if (Number(card.userId) !== Number(userId)) {
    throw { type: "forbidden", message: " is not your id" };
  }
  await cardRepository.deleteCard(cardId);
}

export {
  createCard,
  searchAllCard,
  searchCardById,
  deleteCard,
};
