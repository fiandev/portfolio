import bcrypt from "bcryptjs";
import { env } from "@utils/functions";

const key = process.env.ENCRYPTION_KEY;
const algorithm = "AES";

export const encrypt = async (text: string, level = 5) =>
  await bcrypt.hash(text, level);
export const compare = async (encrypted: string, text: string) =>
  await bcrypt.compare(encrypted, text);
