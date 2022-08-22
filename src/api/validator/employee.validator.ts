import Joi from "@hapi/joi";
const nameSalaryValidator = Joi.object({
  name:Joi.string().required().min(3).max(20),
  salary : Joi.number().required().min(5000).max(100000)
})


const idValidator= Joi.object({
  id: Joi.string()
  .required()
  .min(16)
  .uuid()
})

const nameValidator = Joi.object({
  name:Joi.string().required().min(3).max(20),
  
})

// const salaryValidator = Joi.object({
//   name:Joi.string().required().min(3).max(20),
  
// })




const paginationValidator = Joi.object({
    page:Joi.number().min(1).optional(),
    size:Joi.number().min(1).optional(),
    sortOn:Joi.string().optional(),
    sortBy:Joi.string().optional(),
    keyword:Joi.string().optional()

  })

export { 
    idValidator,paginationValidator,nameSalaryValidator,nameValidator
};
