import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

import User from "@models/User";
import connect from "@database/connect";
import { encrypt } from "@utils/encryption";

export async function POST(req, res) {
  const { username, email, password } = req.body;

  try {
    const hashed_password = await encrypt(password, 5);
    await connect();
    await User.create({
      username: username,
      email: email,
      is_admin: email === "fiandev1234@gmail.com",
      password: hashed_password,
    });

    return res.status(200).json({
      message: "user has been added !",
    });
  } catch (err) {
    console.error({ err });

    return res.status(201).json({
      message: "failed when add new user !",
      error: error.message,
    });
  }
}
