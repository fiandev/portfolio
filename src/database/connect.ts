import mongoose from "mongoose";
import { env } from "@utils/functions";

const connect = async () => {
  try {
    return await mongoose.connect(
      env("NEXT_SECRET_MONGODB_CONNECTION", () => {
        throw new Error("mongodb string connection, is not exist !");
      }),
    );
    console.log();
  } catch (err) {
    
  }
};

export default connect;
