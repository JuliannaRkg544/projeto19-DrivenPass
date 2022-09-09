import {credentials} from "@prisma/client"
import client from "../config/database.js"

export type CredentialData = Omit<credentials, "id">

async function insertCredential(credentialdata: CredentialData) {
    await client.credentials.create({data:credentialdata})
}

async function findCredentialByUserId(userId:number) {
   return await client.credentials.findMany({where:{userId:userId}})
}

async function findOneByCredentialId(credentialId:number) {
    return await client.credentials.findFirst({where:{id:credentialId}})
}
async function deleteCredential(credentialId:number) {
    await client.credentials.deleteMany({where:{id:credentialId}})
}

export {
    insertCredential, findCredentialByUserId, findOneByCredentialId, deleteCredential
}