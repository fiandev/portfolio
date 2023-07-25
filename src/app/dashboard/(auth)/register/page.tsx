"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { faSpinner, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FormFloating from "@components/partials/FormFloating";
import Alert from "@components/partials/contact/Alert";

import { randomID, env } from "@utils/functions";

const Register = () => {
  const [active, setActive] = useState(false);
  const [errors, setErrors] = useState([]);
  const router = useRouter();
  
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;
    
    if (password !== confirmPassword) {
      setErrors((errors) => ["your password and confirm password is't same !"]);
      return false;
    }
    
    try {
      setActive(true);
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      
      console.log({ response })
      setErrors((errors) => [response.status, JSON.stringify(response, 0, 2, null)]);
      
      setActive(false);
      /*
      response.status === 201 &&
        router.push("/dashboard/login?success=Account has been created!");
        */
    } catch (err) {
      console.log(err.message);
      setErrors((errors) => errors.concat(`catch: ${err.message}`));
    }
  };
  
  if (env("APP_ENV") === "production") return router.push("/dashboard/login");
  
  return (
    <div className="flex flex-col pt-2 scroll-smooth relative w-full">
    
      
      <form className="flex flex-col justify-center gap-2 w-full h-screen p-4" onSubmit={handlerSubmit}>
        {
         errors && errors.map((error) => {
          return (
              <Alert key={randomID()} className="bg-rose-500 font-bold">
                  <p className="font-normal text-sm lg:text-lg">
                    {error}
                  </p>
              </Alert>
            );
         }) 
        }
        
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
          name="confirm-password"
          text="confirm password"
          placeholder="confirm your password ..."
        />
        <button
          htmlType="submit"
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