const Joi = require("joi");
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../middlewares");

const contactShema = new Schema(
  {
    name: {
      type: String,
      required: [true, "set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactShema.post("save", handleMongooseError);

const Contact = model("contact", contactShema);

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
      favorite: Joi.boolean(),
    }),
  });

const updateFavoritSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ "any.required": "missing field favorite" }),
});

const schemas = {
  contactSchema,
  updateFavoritSchema,
};

module.exports = {
  Contact,
  schemas,
};
