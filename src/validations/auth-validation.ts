import joi from 'joi'

export const regsterJoi = joi.object({
   name : joi.string().min(3).max(30).required(),
   email : joi.string().min(3).max(30).email().required(),
   password : joi.string().min(3).max(30).required()
})

export const loginJoi = joi.object({
   email : joi.string().min(3).max(30).email().required(),
   password : joi.string().min(3).max(30).required(),
})
