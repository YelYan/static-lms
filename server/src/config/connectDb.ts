import mongoose from "mongoose";

import config from "./config.js";


const connectDb = async () => {
try {
    await mongoose.connect(config.mongoUri);
    console.log("MongoDb connected successfully!");
    
} catch (error) {
    console.error("MongoDb connection failed!", error);
    process.exit(1);
}
}

export default connectDb