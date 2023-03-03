import { Router } from "express";
import { Register ,Login,Resitpassword,Forgetpassword} from "../controllers/auth/authController";

const router=Router();
    router.get('/register',Register)
    router.get('login',Login)
    router.get('/resitpassword',Resitpassword)
    router.get('/forgrtpassword',Forgetpassword)
export default router;