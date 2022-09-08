import {credentials} from "@prisma/client"
import client from "../config/database.js"

export type CredentialData = Omit<credentials, "id">

async function insertCredential(credentialdata: CredentialData) {
    await client.credentials.create({data:credentialdata})
}

async function findCredentialByUserId(userId:number) {
    console.log("userId type ", typeof userId, " userid ", userId)
   return await client.credentials.findMany({where:{userId:userId}})
}

export {
    insertCredential, findCredentialByUserId
}