import mongoose from "mongoose";

export const connect = async () => {
    try {
        return mongoose.connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log("database connection failed", error);
        
    }
}