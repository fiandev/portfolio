import bcrypt from "bcryptjs";
import { env } from "@utils/functions";

const key = env("ENCRYPTION_KEY", () => {
  throw new Error("ENCRYPTION_KEY is not exist !")
});
const algorithm = "AES";

export const encrypt = async (text: string, level = 5) => await bcrypt.hash(text, level);
export const compare = async (encrypted: string, text: string) => await bcrypt.compare(encrypted, text);