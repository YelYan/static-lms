import Joi from "joi";

export const userSchemaValidate = Joi.object({
    name : Joi.string()
    .alphanum() // Must contain only alphanumeric characters
    .min(3)
    .max(30)
    .required()
    .messages({
    "string.base": "Name must be a string.",
    "string.empty": "Name cannot be empty.",
    "string.min": "Name must be at least 1 character long.",
    "string.max": "Name must not exceed 255 characters.",
    "any.required": "Name is required.",
  }), 

password: Joi.string()
  .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  .min(6)
  .max(25)
  .required()
  .messages({
    "string.base": "Password must be a string.",
    "string.empty": "Password cannot be empty.",
    "string.min": "Password must be at least 6 characters long.",
    "string.max": "Password cannot exceed 25 characters.",
    "string.pattern.base": "Password must contain only letters and numbers.",
    "any.required": "Password is required."
  }),

    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }) // Validate email format
    .required() 
    .messages({
    "string.base": "Email must be a string.",
    "string.empty": "Email cannot be empty.",
    "string.email": "Please provide a valid email address.",
    "any.required": "Email is required."
  })
})

export const productSchemaValidate = Joi.object({
  name: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages({
    "string.base": "Name must be a string.",
    "string.empty": "Name cannot be empty.",
    "string.min": "Name must be at least 1 character long.",
    "string.max": "Name must not exceed 255 characters.",
    "any.required": "Name is required.",
  }), 

  price: Joi.number()
    .positive()
    .precision(2) // Allows for up to 2 decimal places
    .required(),

  description: Joi.string()
    .allow(null)
    .optional()
    .min(10)
    .max(1000)
    .empty()
        .messages({
      "string.base": "Description must be a string.",
      "string.max": "Description must not exceed 1000 characters.",
    }),
});





