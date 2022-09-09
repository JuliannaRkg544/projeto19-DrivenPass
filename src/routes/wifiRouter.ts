import { Router } from "express";
import { createWifi, deleteWifi, searchWifi } from "../controllers/wifiController.js";
import schemaValidator from "../middlewares/schemaValidator.js";
import { tokenValidator } from "../middlewares/tokenValidator.js";
import wifiSchema from "../schemas/wifiSchema.js";

const wifiRouter = Router()

wifiRouter.use(tokenValidator)

wifiRouter.post("/wifi-creation", schemaValidator(wifiSchema) ,createWifi)
wifiRouter.get("/wifi-search", searchWifi)
wifiRouter.delete("/wifi-deletation/:id", deleteWifi)

export default wifiRouter