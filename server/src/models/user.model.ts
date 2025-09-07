import bcrypt from "bcryptjs";
import  {Document,model,Schema, } from "mongoose"

// The IUser interface defines the shape of our User document
export interface IUser extends Document {
    email : string;
    name : string;
    password : string;
}

const userSchema = new Schema({
    email: { 
        required: true,
        type: String,  
        unique: true,
    },
    name: { 
        type: String 
    },
    password: { 
        select : false,
        type: String, 
    },
},   { timestamps: true });

userSchema.pre("save", async function (this: IUser, next) {
    const salt = await bcrypt.genSalt(10);
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});


const User = model<IUser>("User", userSchema);

export default User;
