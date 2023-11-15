const Joi = require("joi");

const contactSchema = Joi.object()
  .min(1)
  .messages({
    "object.min": "missing fields",
  })
  .when(Joi.object().min(1), {
    then: Joi.object({
      name: Joi.string()
        .required()
        .messages({ "any.required": "missing required name field" }),
      email: Joi.string()
        .email()
        .required()
        .messages({ "any.required": "missing required email field" }),
      phone: Joi.string()
        .required()
        .messages({ "any.required": "missing required phone field" }),
    }),
  });

module.exports = contactSchema;
