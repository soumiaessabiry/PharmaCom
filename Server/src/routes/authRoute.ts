import { Router } from "express";
import { Register ,Login,Resitpassword,Forgetpassword} from "../controllers/auth/authController";
import { registerValidation } from "../utils/validation/Authvalidation/validationUser";

const router=Router();
    router.post('/register',registerValidation,Register)
    router.get('login',Login)
    router.get('/resitpassword',Resitpassword)
    router.get('/forgrtpassword',Forgetpassword)
export default router;