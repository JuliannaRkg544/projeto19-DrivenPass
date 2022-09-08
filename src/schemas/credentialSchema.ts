import Joi from "joi";

const credentialSchema = Joi.object({
    title: Joi.string().required(),
    url: Joi.string().uri().required(),
    user: Joi.string().required(),
    password: Joi.string().required(),
})
