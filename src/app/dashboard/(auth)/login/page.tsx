"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

export default function Login() {
  const [isFailed, setIsFailed] = useState<boolean>(false);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signIn("credentials", { email, password });
    } catch (error) {
      console.log({ error });
      setIsFailed(true);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form onSubmit={handlerSumbmit} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="email"
          className="w-full p-2 outline outline-gray-300 hover:outline-main"
          required="true"
        />
        <input
          type="password"
          placeholder="password"
          className="w-full p-2 outline outline-gray-300 hover:outline-main"
          required="true"
        />
        <button className="w-fit p-2 outline-main text-main">login</button>
      </form>
    </div>
  );
}
