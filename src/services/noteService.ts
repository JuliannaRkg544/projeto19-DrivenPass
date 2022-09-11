import * as noteRepository from "../repository/noteRepository.js";

async function createNote(title: string, description: string, userId: number) {
  const notes = await noteRepository.searchAllNotes(userId);
  if (notes.length > 0) {
    const noteTitles = notes.map((note) => {
      return note.title;
    });
    if (noteTitles.includes(title)) {
      throw { type: "forbidden", message: "title name already exist" };
    }
  }
  const notedata: noteRepository.NoteData = {
    userId,
    title,
    description,
  };
  return await noteRepository.createNote(notedata);
}

async function searchAllNotes(userId: number) {
  const notes = await noteRepository.searchAllNotes(userId);
  if (notes.length === 0) {
    throw { type: "unauthorized", message: "not note for this userid" };
  }
  return notes;
}

async function searchNoteById(noteId: number) {
  const note = await noteRepository.searchNoteById(noteId);
  if (!note) {
    throw { type: "unauthorized", message: "not note for this id" };
  }
  return note;
}

async function deleteNote(noteId: number, userId: number) {
  const note = await noteRepository.searchNoteById(noteId);
  if (!note) {
    throw { type: "unauthorized", message: "does not exist" };
  }
  if (Number(note.userId) !== Number(userId)) {
    throw { type: "unauthorized", message: " is not your note" };
  }
  await noteRepository.deleteNote(noteId);
}

export { createNote, searchAllNotes, searchNoteById, deleteNote };
