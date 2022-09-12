import Joi from "joi";
var wifiSchema = Joi.object({
    title: Joi.string().required(),
    password: Joi.string().required(),
    lable: Joi.string().required()
});
export default wifiSchema;
