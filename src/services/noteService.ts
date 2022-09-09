import * as noteRepository from "../repository/noteRepository.js"


async function createNote(title:string, description:string, userId:any) {
    const notes = await noteRepository.searchAllNotes(userId)
    if(notes.length>0){
        const noteTitles = notes.map((note)=>{return note.title})
        if (noteTitles.includes(title)){
            throw {type:"forbidden", message:"title name already exist"}
        }
    }
    const notedata:noteRepository.NoteData = {
        userId,
        title,
        description
    }
    return await noteRepository.createNote(notedata)
}


async function searchAllNotes(userId:any) {
    
}

async function searchNoteById(noteId:number) {
    
}

async function deleteNote(noteId:any, userId:any) {
    const note = await noteRepository.searchNoteById(noteId)
    if(!note){
        throw{type:"forbidden", message:"does not exist"}
    }
    if(Number(note.userId)!==Number(userId)){
        throw{type:"forbidden", message:" is not your note"}
    }
    await noteRepository.deleteNote(noteId)
}

export {
    createNote, searchAllNotes, searchNoteById, deleteNote
}