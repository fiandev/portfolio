import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

import User from "@models/User";
import connect from "@database/connect";
import { encrypt, decrypt } from "@utils/encryption";

export const POST = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await connect();
  const { name, email, password, username } = req.body;

  const hashedPassword = await encrypt(password, 5);

  const newUser = await User.create({
    name,
    email,
    username,
    is_admin: email === "fiandev1234@gmail.com",
    password: hashedPassword,
  });

  try {
    return res.status(200).json({
      message: "user has been added !",
      username: newUser.username,
    });
  } catch (err) {
    console.log(err);
    return res.status(201).json({
      message: "failed when add new user !",
      error: error.message,
    });
  }
};
