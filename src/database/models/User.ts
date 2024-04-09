import mongoose from "mongoose";
import UserSchema from "@schemas/UserSchema";

export const MODELNAME = "User";
const exist = mongoose.models[MODELNAME];
const User = !exist
  ? mongoose.model(MODELNAME, UserSchema)
  : mongoose.model(MODELNAME);

  
export default User;
