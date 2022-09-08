import users from "@prisma/client";
import client from "../config/database.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import * as authRepository from "../repository/authRepository.js"
import {UserData} from "../repository/authRepository.js" 
dotenv.config();

async function signupUser(email: string, password: string) {

   const emails = await authRepository.findUserByEmail(email)

   if(emails.length>0){
    console.log(emails)
    throw{type:"conflict",message:"email already in use"}
   }

   const encryptedPassword = await bcrypt.hash(password, 10);

   const userdata: UserData = {
    email:email,
    password:encryptedPassword
   }

   await authRepository.insertUser(userdata)


}

async function signinUser(email: string, password: string) {

  const secretkey =  process.env.JWT_SECRET
  const user = await authRepository.findUserByEmail(email)
  if (!email || !password){
    throw {type:'unprocessable_entity'}
  }
  if (user.length===0){
    throw {type:"not_found", message:"user not found"}
  }
  console.log( !(await bcrypt.compare(password,user[0].password)))
  if( !(await bcrypt.compare(password,user[0].password)) ) {
   throw {type:'unauthorized'}
  }
  
  const token = jwt.sign(String(user[0].id), String(secretkey) )
  const userLoged = {token,email}
  return userLoged
}

export { signinUser, signupUser };
