"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { faSpinner, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FormFloating from "@components/partials/FormFloating";
import Alert from "@components/partials/contact/Alert";

import { randomID } from "@utils/functions";

const Register = (): any => {
  const [active, setActive] = useState(false);
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    let data = {
      username: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      confirm_password: e.target[3].value,
    };

    let { password, confirm_password } = data;

    if (password !== confirm_password)
      return setErrors(["The password and confirm password is not same !"]);
    setActive(true);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();
      setMessage(json.message);
      setActive(false);
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <div className="flex flex-col pt-2 scroll-smooth relative w-full">
      <form
        className="flex flex-col justify-center gap-2 w-full h-screen p-4"
        onSubmit={handlerSubmit}
      >
        {errors &&
          errors.map((error) => {
            return (
              <Alert key={randomID()} className="bg-rose-500 font-bold">
                <p className="font-normal text-sm lg:text-lg">{error}</p>
              </Alert>
            );
          })}

        {message && (
          <Alert key={randomID()} className="bg-main font-bold">
            <p className="font-normal text-sm lg:text-lg">{message}</p>
          </Alert>
        )}
        <FormFloating
          name="username"
          text="username"
          placeholder="write your username ..."
        />
        <FormFloating
          name="email"
          text="email"
          placeholder="write your email ..."
        />
        <FormFloating
          name="password"
          text="password"
          placeholder="write your password ..."
        />
        <FormFloating
          name="confirm_password"
          text="confirm password"
          placeholder="confirm your password ..."
        />
        <button
          type="submit"
          className="hover:cursor-pointer self-end md:self-start font-sans font-light hover:font-semibold transition-all flex gap-2 items-center justify-center w-24 h-8 p-2 group/btn bg-blue-500 hover:bg-blue-600 outline-lg outline-blue-200 outline hover:outline-blue-400 hover:animate-none hover:shadow-lg text-slate-50 rounded-full"
        >
          <FontAwesomeIcon
            className={`${
              active ? "hover:cursor-wait" : "hover:cursor-pointer"
            } animation group-hover/btn:animate-bounce`}
            icon={!active ? faPaperPlane : faSpinner}
          />
          Send
        </button>
      </form>
    </div>
  );
};

export default Register;
