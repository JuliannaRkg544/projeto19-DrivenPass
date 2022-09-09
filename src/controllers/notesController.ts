import { Request, Response } from "express";
import * as notesServices from "../services/noteService.js"

export async function createNotes(req:Request, res:Response) {
    const {title, description}:{title:string, description:string}=req.body
    const userId = res.locals.user 

    const note = await notesServices.createNote(title, description, userId)
    res.status(200).send(note)
}

export async function searchNotes(req:Request, res:Response) {
    const noteId = +req.query.id  // é uma string
    const userId = res.locals.user // é um numero
    if (!noteId){
        //se n tiver noteId quero buscar todas as notas
        const note = await notesServices.searchAllNotes(userId)
        return res.status(200).send(note)
    }
    //se tiver noteId quero buscar apenas uma nota específica
    const note = await notesServices.searchNoteById(noteId)
    res.status(200).send(note)
}

export async function deleteNotes(req:Request, res:Response) {
    const noteId = +req.query.id  // é uma string
    const userId = res.locals.user // é um numero
    if(!noteId){
        throw{type:"forbidden", message:"invalid note id"}
      }
    await notesServices.deleteNote(noteId, userId)
    res.sendStatus(200)
}