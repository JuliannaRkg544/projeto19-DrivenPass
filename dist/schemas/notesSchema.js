import Joi from "joi";
var noteSchema = Joi.object({
    title: Joi.string().max(50).required(),
    description: Joi.string().max(1000).required()
});
export default noteSchema;
