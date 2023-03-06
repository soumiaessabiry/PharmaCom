import  createHttpError  from 'http-errors';
import { RequestHandler } from "express"
import usersModel, { userInterface } from "../../models/usersModel";
export const Register:RequestHandler=async(req,res,next)=>{
    const {username,email,password}:userInterface=req.body;
   try {
    const checkUser=await usersModel.findOne({email})
    if(checkUser) return next(createHttpError(406,"email is areadd exist"))
    const creatUser=new usersModel({
        username,email,password
    })
    await creatUser.save();
    res.json({creatUser})
   } catch (error) {
   return  next(createHttpError.InternalServerError)
   }
}
export const Login:RequestHandler=(req,res,nex)=>{
    res.json({message:'hello login'})
}
export const Resitpassword:RequestHandler=(req,res,nex)=>{
    res.json({message:'hello resit'})
}
export const Forgetpassword:RequestHandler=(req,res,nex)=>{
    res.json({message:'hello forget'})
}