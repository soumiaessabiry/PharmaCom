import Joi from "joi"
export const valideSchema={
    dataRegister:Joi.object({
        username:Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
        email:Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password:Joi.string().min(4).max(7),
        role:Joi.string()
       
        
    })
}