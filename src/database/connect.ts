import mongoose from "mongoose";

const connect = async () => {
  try {
    return await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log("connection database error!", error);
    
  }
};

export default connect;
