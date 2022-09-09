import { Request, Response } from "express";
import * as wifiService from "../services/wifiService.js"

export async function createWifi(req:Request, res:Response) {
    const {title, password, lable}:{title:string, password:string, lable:string}=req.body
    const userId = res.locals.user 

    const note = await wifiService.createWifi(title, password, lable, userId)
    res.status(200).send(note)
}

export async function searchWifi(req:Request, res:Response) {
    const wifiId = +req.query.id  // é uma string
    const userId = res.locals.user // é um numero
    if (!wifiId){
        //se n tiver noteId quero buscar todas as notas
        const note = await wifiService.searchAllWifi(userId)
        return res.status(200).send(note)
    }
    //se tiver noteId quero buscar apenas uma nota específica
    const note = await wifiService.searchWifiById(wifiId)
    res.status(200).send(note)
}

export async function deleteWifi(req:Request, res:Response) {
    const wifiId = +req.params.id  // é uma string
    const userId = res.locals.user // é um numero
    if(!wifiId){
        throw{type:"forbidden", message:"invalid note id"}
      }
    await wifiService.deleteWifi(wifiId, userId)
    res.sendStatus(200)
}


