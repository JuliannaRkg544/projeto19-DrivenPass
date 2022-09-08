import { Router } from "express";
import { createCredential, getCredentials } from "../controllers/credentialController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";
import credentialSchema from "../schemas/credentialSchema.js";

const credentialRouter = Router()

credentialRouter.post("/credential-create", schemaValidator(credentialSchema) ,tokenValidator ,createCredential)
credentialRouter.get("/credential-search", tokenValidator ,getCredentials )


export default credentialRouter
