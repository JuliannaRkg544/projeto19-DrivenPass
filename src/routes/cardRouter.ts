import { Router } from "express"
import { createCard, deleteCard, searchCard } from "../controllers/cardController.js"
import schemaValidator from "../middlewares/schemaValidator.js"
import { tokenValidator } from "../middlewares/tokenValidator.js"
import { cardSchema } from "../schemas/cardSchema.js"


const cardRouter = Router()

cardRouter.use(tokenValidator)

cardRouter.post("/card-creation", schemaValidator(cardSchema), createCard)
cardRouter.get("/card-search", searchCard)
cardRouter.delete("/card-deletation/:id", deleteCard)


export default cardRouter
