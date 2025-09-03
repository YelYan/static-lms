import {Document, model, Schema} from "mongoose";

// The IProduct interface defines the shape of our Product document
export interface IProduct extends Document {
    description : string;
    name : string;
    price : number;
}

const productSchema = new Schema({
    description : {
            type : String
    },
    name : {
        required : [true , "Please provide product name"],
        type: String
    },
    price : {
        required : [true , "Please provide product price"],
        type : Number,
    },

},   { timestamps: true })

const Product = model("Product", productSchema);

export default Product