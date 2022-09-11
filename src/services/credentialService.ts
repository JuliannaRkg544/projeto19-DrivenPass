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

async function getAllCredentials(userId:number) {
    
        const credentials = await credentialRepository.findCredentialByUserId(userId)
        if (credentials.length===0){
            throw{type:"unauthorized", message:"not credential for this userid"}
        }
        const credentialWithPassword = uncryptPassword(credentials)
        return credentialWithPassword
    
}


async function getCredentialById(credentialId:number) {

    const credential = await credentialRepository.findOneByCredentialId(credentialId)
    if(!credential){
        throw{type:"unautorized", message:"not credential for this id"}
    }

    credential.password = cryptr.decrypt(credential.password)
    return credential
    
}

function uncryptPassword(credentials:any){
    
    credentials.forEach((cred) => {
        const decryptedPassword = cryptr.decrypt(cred.password);
        cred.password = decryptedPassword;
      });
      return credentials
}

async function deleteCredential(userId:number, credentialId:number) {
    const credential = await getCredentialById(credentialId)
    if(!credential){
        throw{type:"unauthorized", message:"existent credential"}
    }
    if(Number(credential.userId)!==Number(userId)){
        throw{type:"unauthorized", message:" invalid operation"}
    }
    await credentialRepository.deleteCredential(credentialId)
}

export{createCredential, getAllCredentials, getCredentialById, deleteCredential}