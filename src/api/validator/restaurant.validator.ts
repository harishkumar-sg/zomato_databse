import Joi from "@hapi/joi";

const restuarntValidate = Joi.object({
  name: Joi.string().required().min(8).max(20),
  ratings: Joi.string().required().pattern(new RegExp('[0-5]?[/][0-5]?')),
  chefobj: Joi.object().required(),
  itemsobj: Joi.array().required(),
});
const idValidator = Joi.object({
  id : Joi.string().required().uuid()
})


export { restuarntValidate, idValidator };