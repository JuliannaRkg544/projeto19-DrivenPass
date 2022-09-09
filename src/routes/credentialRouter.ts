import { Router } from "express";
import { createCredential, deleteCredential, getCredentials } from "../controllers/credentialController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";
import credentialSchema from "../schemas/credentialSchema.js";

const credentialRouter = Router()

credentialRouter.use(tokenValidator)

credentialRouter.post("/credential-create", schemaValidator(credentialSchema) ,createCredential)
credentialRouter.get("/credential-search" ,getCredentials )  //falta descriptogarafar a senha
credentialRouter.delete("/credential-deletation/:id", deleteCredential)


export default credentialRouter
