import { CardData } from "../repository/cardRepository.js";
import Joi from "joi";

const cvvRegex = /^[0-9]{3}/
const cardnumberRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})/

export const cardSchema = Joi.object<CardData>({
  title: Joi.string().required(),
  number: Joi.string().length(16).required(),
  name: Joi.string().required(),
  securityCode: Joi.string()
    .pattern(cvvRegex)
    .required(),
  expirationDate: Joi.string()
    .pattern(cardnumberRegex)
    .required(),
  password: Joi.string().required(),
  isVirtual: Joi.boolean().required(),
  type: Joi.string().valid("credit", "debit", "credit_debit").required(),
});
