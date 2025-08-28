import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    description : {
            type : String
    },
    image : {
        required : [true , "Please provide produt image"],
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

const Product = mongoose.model("Product", productSchema);

export default Product