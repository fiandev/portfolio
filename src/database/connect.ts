import mongoose from "mongoose";
import { env } from "@utils/functions";

const connect = async () => {
  return await mongoose.connect(
    env("MONGODB_CONNECTION", () => {
      throw new Error("mongodb string connection, is not exist !");
    }),
  );
};

export default connect;
