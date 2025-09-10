import bcrypt from "bcryptjs";
import crypto from "crypto"
import  {Document,model,Schema, } from "mongoose"

// The IUser interface defines the shape of our User document
export interface IUser extends Document {
    email : string;
    getResetPassword : () => string
    name : string;
    password : string;
    resetPasswordExpire?: Date;
    resetPasswordToken?: string;
    role? : string
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
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    password: { 
        select : false,
        type: String, 
    },
    role : {
        type : String,
        enum : ["admin" , "editor" , "user"],
        default : "user",
    }
},   { timestamps: true });

userSchema.pre("save", async function (this: IUser, next) {
    const salt = await bcrypt.genSalt(10);
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

// Method to generate reset password token
userSchema.methods.getResetPassword = function () {
    const resetToken = crypto.randomBytes(32).toString("hex");

    this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000) // Ten Minutes

    return resetToken; // Send plain token via email
}


const User = model<IUser>("User", userSchema);

export default User;
