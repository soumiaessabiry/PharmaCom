import { Schema,model, Document} from "mongoose";
export  interface userInterface extends Document{
    username: string;
    email: string;
    password:string;
    role:string;
    confirme:boolean
}
const userSchema:Schema=new Schema({
    username:{
        type:String
    },
    email: {
        type:String

    },
    password:{
        type:String

    },
    role:{
        type:String,
        default :"Client"

    },
    confirme:{
        type:Boolean,
        default:false

    }
})
export default model<userInterface>("user",userSchema)