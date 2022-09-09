import { Router } from "express";
import { createNotes, deleteNotes, searchNotes } from "../controllers/notesController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";
import noteSchema from "../schemas/notesSchema.js";

const notesRouter = Router()

notesRouter.use(tokenValidator)

notesRouter.post("/notes-creation",schemaValidator(noteSchema), createNotes)
notesRouter.get("/notes-search", searchNotes)
notesRouter.delete("/notes-deletation", deleteNotes)

export default notesRouter