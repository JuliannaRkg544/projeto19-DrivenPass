import Joi from "joi";
import { CredentialData } from "../repository/credentialRepository.js";

const credentialSchema = Joi.object<CredentialData>({
  title: Joi.string().required(),
  url: Joi.string().uri().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export default credentialSchema;
