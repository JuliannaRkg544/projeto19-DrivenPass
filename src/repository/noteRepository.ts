import { notes } from "@prisma/client";
import client from "../config/database.js";

export type NoteData = Omit<notes, "id">

async function createNote(notedata:NoteData) {
    await client.notes.create({data:notedata})
}

async function searchNoteById(noteId:any) {
    return await client.notes.findFirst({where:{id:noteId}})
}

async function searchAllNotes(userId:any) {
    return await client.notes.findMany({where:{userId:userId}})
}
async function deleteNote(noteId:any) {
    await client.notes.deleteMany({where:{id:noteId}})
}
export{
    createNote, searchAllNotes, searchNoteById, deleteNote
}
