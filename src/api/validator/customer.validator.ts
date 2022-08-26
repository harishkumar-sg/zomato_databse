import Joi from "@hapi/joi"

const createValidator = Joi.object({
    email: Joi.string().required().email(),
    fname : Joi.string().required().min(3).max(20),
    lname : Joi.string().required().min(3).max(20),
    phone: Joi.string().required().length(10),
})
const idValidator = Joi.object({
    id : Joi.string().required().uuid()
})

export {
    createValidator,idValidator
}