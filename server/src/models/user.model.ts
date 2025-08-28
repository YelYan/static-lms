import  {Document,model,Schema, } from "mongoose"

// The IUser interface defines the shape of our User document
export interface IUser extends Document {
    email : string;
    name : string;
    password : string;
}

const userSchema = new Schema({
    email: { 
        match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
        ],
        required: true,
        type: String,  
        unique: true,
    },
    name: { 
        required: [true, "Please Provide Name"],
        type: String 
    },
    password: { 
        minLength : [6 , "Password must be at least 6 characters"],
        required: [true, "Please Provide Password"],
        select : false,
        type: String, 
    },
},   { timestamps: true });

const User = model<IUser>("User", userSchema);

export default User;
