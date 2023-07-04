import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_HOST).then(() => {
            console.log("MongoDB connection SUCCESS");
        }).catch((error) => {
            console.log("MongoDB connection FAIL",error);
        });
    } catch (error) {
        console.error("MongoDB connection FAIL");
        process.exit(1);
    }
    }

export default connectDB;