import client from "../config/database.js";
import { users } from "@prisma/client";

export type UserData = Omit<users,"id">


async function findUserByEmail(email:string) {
    const user = await client.users.findMany({ where: { email: email } });
    return user
}

async function insertUser(userdata:UserData) {
    client.users.create({data:userdata})
}

// async function findUserByEmail(email:string) {
//     console.log("no repository")
//     const user = await client.users.findMany({ where: { email: email } });
//     return user
// }

export {
    findUserByEmail, insertUser
}
