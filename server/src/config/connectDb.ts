import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI ?? "" as string;

const connectDb = async () => {
try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDb connected successfully!");
    
} catch (error) {
    console.error("MongoDb connection failed!", error);
    process.exit(1);
}
}

export default connectDb