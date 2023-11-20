const Joi = require("joi");
const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

// eslint-disable-next-line no-useless-escape
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    password: {
      type: String,
      minlength: 6,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: emailRegexp,
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: String,
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

const registerSchema = Joi.object()
  .min(1)
  .messages({
    "object.min": "missing fields",
  })
  .when(Joi.object().min(1), {
    then: Joi.object({
      password: Joi.string()
        .min(6)
        .required()
        .messages({ "any.required": "missing required password field" }),
      email: Joi.string()
        .pattern(emailRegexp)
        .required()
        .messages({ "any.required": "missing required email field" }),
    }),
  });

const schemas = {
  registerSchema,
};

module.exports = {
  User,
  schemas,
};
