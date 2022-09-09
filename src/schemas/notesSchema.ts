import Joi from "joi"
import { NoteData } from "../repository/noteRepository.js"

const noteSchema = Joi.object<NoteData>({
    title: Joi.string().max(50).required(),
    description: Joi.string().max(1000).required()
})

export default noteSchema