import Joi from "joi";
var credentialSchema = Joi.object({
    title: Joi.string().required(),
    url: Joi.string().uri().required(),
    username: Joi.string().required(),
    password: Joi.string().required()
});
export default credentialSchema;
