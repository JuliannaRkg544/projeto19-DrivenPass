import { Router } from "express";
import { createCredential } from "../controllers/credentialController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";
import credentialSchema from "../schemas/credentialSchema.js";

const credentialRouter = Router()

credentialRouter.post("/credential-create", schemaValidator(credentialSchema) ,tokenValidator ,createCredential)

export default credentialRouter
