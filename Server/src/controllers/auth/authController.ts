import { RequestHandler } from "express";

export const Register:RequestHandler=(req,res,nex)=>{
    res.json({message:'hello register'})
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