import users from "@prisma/client";
import client from "../config/database.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import * as authRepository from "../repository/authRepository.js"
import {UserData} from "../repository/authRepository.js" 
dotenv.config();

async function signupUser(email: string, password: string) {
  //ir no banco verifiar se emial é valido OK
  //criptografar a senha OK
  //inserir dados no banco OK
   const emails = await authRepository.findUserByEmail(email)

   if(emails.length>0){
    console.log(emails)
    throw{type:"conflict",message:"email already in use"}
   }

   const encryptedPassword = bcrypt.hashSync(password, 10);

   const userdata: UserData = {
    email:email,
    password:encryptedPassword
   }

   await authRepository.insertUser(userdata)


}

async function signUser(email: string, password: string) {
  //ir no banco procurar pelo emial
  // comparar as senhas
  //gerar token e mandar pro front
}

export { signUser, signupUser };
