//type do prisma client
//export tyope com omit

import { wifi } from "@prisma/client"

export type WifiData = Omit<wifi,"id">

import client from "../config/database.js"

async function createWifi(wifidata:WifiData){
     await client.wifi.create({data:wifidata})
}

async function searchAllWifi(userId:any) {
    return await client.wifi.findMany({where:{userId:userId}})
    
}

async function searchWifiById(wifiId:any) {
    return await client.wifi.findFirst({where:{id:wifiId}})
}

async function deleteWifi(wifiId:any) {
    await client.wifi.deleteMany({where:{id:wifiId}})
}



export{
  createWifi, searchAllWifi, searchWifiById, deleteWifi
}