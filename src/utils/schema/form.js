import Joi from "joi";

export const registrationFormSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  conf_password: Joi.string().valid(Joi.ref("password")).required(),
});


