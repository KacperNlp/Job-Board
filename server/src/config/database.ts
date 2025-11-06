import mongoose from "mongoose";
import { config } from "dotenv";
config();

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/job-board";

        await mongoose.connect(mongoURI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;
