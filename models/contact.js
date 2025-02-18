const { Schema, model } = require("mongoose");
const { mongooseError } = require("../helpers");
const Joi = require("joi");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
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
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", mongooseError);

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `Missing required name field`,
  }),

  email: Joi.string().required().messages({
    "any.required": `Missing required email field`,
  }),

  phone: Joi.string().required().messages({
    "any.required": `Missing required phone field`,
  }),

  favorite: Joi.boolean().optional(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean()
    .required()
    .messages({ "any.required": `Missing field favorite` }),
});

const Contact = model("contact", contactSchema);

module.exports = { Contact, addSchema, updateFavoriteSchema };
