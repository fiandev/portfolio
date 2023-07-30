import mongoose from "mongoose";
import { env } from "@utils/functions";

const connect = async () => {
  try {
    return await mongoose.connect(process.env.MONGODB_CONNECTION);
    console.log();
  } catch (err) {}
};

export default connect;
