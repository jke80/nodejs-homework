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
    token: {
      type: String,
      default: "",
    },
    avatarURL: {
      type: String,
    },
    verify:{
      type: Boolean,
      default:false,
    },
    verificationToken:{
       type:String,
       required: [true, 'Verify token is required'],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

const registerAndLoginSchema = Joi.object()
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

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .required()
    .valid("starter", "pro", "business")
    .messages({
      "any.only": "invalid subscription value",
      "any.required": "missing required subscription field",
    }),
});

const varificationSchema = Joi.object({
  email:Joi.string()
  .required()
  .pattern(emailRegexp)
  .messages({"any.required":"missing required field email"}),
});

const schemas = {
  registerAndLoginSchema,
  updateSubscriptionSchema,
  varificationSchema,
};

module.exports = {
  User,
  schemas,
};
