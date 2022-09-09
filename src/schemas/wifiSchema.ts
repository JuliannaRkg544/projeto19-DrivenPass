import Joi from "joi"
import { WifiData } from "../repository/wifiRepository.js"

const wifiSchema = Joi.object<WifiData>({
   title: Joi.string().required(),
   password: Joi.string().required(),
   lable: Joi.string().required()
})


export default wifiSchema