import * as credentialRepository from "../repository/credentialRepository.js"
import {CredentialData} from "../repository/credentialRepository.js"
import Cryptr from "cryptr"
const cryptr = new Cryptr("myTotallySecretKey");


async function createCredential(title: string, url: string, username: string, password: string, userId:number ) {
   
    await findCredentialByUserId(userId, title)
    
    const criptedPassword:string = cryptrPassword(password)

    const credentialdata:CredentialData = {
        userId,
        title,
        url,
        username,
        password:criptedPassword
    }
    await credentialRepository.insertCredential(credentialdata)
}

function cryptrPassword(password:string):string{
    const criptPassword:string = cryptr.encrypt(password)
    
    return criptPassword
}
async function findCredentialByUserId(userId:number, title:string){

    const userCredentials = await credentialRepository.findCredentialByUserId(userId)
    console.log("credential by user ",userCredentials)
    if (userCredentials.length>0){
        let credentialTittle = userCredentials.map((credential)=>{return credential.title})
        console.log(credentialTittle)
        if(credentialTittle.includes(title)){
            throw{type:"forbidden", message:"title name already in use"}
        }
    }
}

export{createCredential}