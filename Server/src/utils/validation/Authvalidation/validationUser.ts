import { RequestHandler } from 'express';
import { valideSchema } from './validateSchema';
import validator from '../../validator';
export  const registerValidation:RequestHandler=(req,res,next)=>validator(valideSchema.dataRegister,req.body,next);


