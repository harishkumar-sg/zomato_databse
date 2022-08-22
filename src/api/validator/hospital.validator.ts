import Joi from "@hapi/joi";
import { JoinAttribute } from "typeorm/query-builder/JoinAttribute";

const idValidator= Joi.object({
    id: Joi.string()
    .required()
    .min(16)
    .uuid()

    
    
  })

const nameValidator= Joi.object({
  name: Joi.string().required().min(1).max(30).pattern(new RegExp('[A-Z]{3,10}[\_][A-Z]{8}')),
})

const namePincodeValidator = Joi.object({
    name: Joi.string().required().min(1).max(30).pattern(new RegExp('[A-Z]{3,10}[\_][A-Z]{8}')),
    pincode: Joi.string().required().min(6).max(6).pattern(new RegExp('[1]{2}[0]{2}[0-9]{2}'))
})

export { 
  namePincodeValidator,idValidator,nameValidator
};