import { cards } from "@prisma/client";
import client from "../config/database.js";

export type CardData = Omit<cards,"id">

async function insertCard(cardData: CardData) {
    await client.cards.create({data:cardData})
}

async function findCardByUserId(userId:number) {
    console.log("user id ",userId)
   return await client.cards.findMany({where:{userId:userId}})
}

async function findCardById(cardId:number) {
    return await client.cards.findFirst({where:{id:cardId}})
}
async function deleteCard(cardId:number) {
    await client.cards.deleteMany({where:{id:cardId}})
}

export {
    insertCard, findCardByUserId, findCardById, deleteCard
}
