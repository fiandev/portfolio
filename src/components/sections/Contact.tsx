"use client";
import { useState, useEffect } from "react";
import { faSpinner, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ItemContact from "@components/partials/ItemContact";
import FormFloating from "@components/partials/FormFloating";
import Alert from "@components/partials/contact/Alert";

import { randomID, env } from "@utils/functions";

export default function Contact({
  links,
  className,
  formClassName,
}: {
  links?: any[];
  className?: string | null;
  formClassName?: string | null;
}) {
  let [active, setActive] = useState<boolean>(false);
  let [success, setSuccess] = useState<boolean>(false);
  let [errors, setErrors] = useState([]);

  useEffect(() => {
    //
  }, [active]);

  const contactHandler = async (e) => {
    e.preventDefault();
    let form = e.target;
    let data = {
      username: form.elements.username.value,
      message: form.elements.message.value,
      email: form.elements.email.value,
    };
    
    /* validation */
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    setErrors([]);
    
    if (!emailRegex.test(data.email)) setErrors((errors) => errors.concat("email tidak valid !"));
    if (!data.username) setErrors((errors) => errors.concat("username tidak boleh kosong"));
    if (!data.message) setErrors((errors) => errors.concat("pesan tidak boleh kosong"));
    
    let key = env("API_KEY", "${{ secrets.API_KEY }}");
    
    try {
      let response = await fetch("https://portfolio-backend.fiandev.repl.co/messages", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          key: key,
        },
        method: "POST",
        body: JSON.stringify(data)
      })
      
      let json = await response.json()
      
      if (json.code === 200) {
        setSuccess(true);
        setErrors([]);
        setActive(false);
        
        form.reset();
      } else {
        setErrors(["something went wrong !"]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section
      id="contact"
      className={`min-h-[40vh] py-8 transition-all duration-500 flex flex-col gap-4 justify-center items-center ${className}`}
    >
      <h1 className="text-3xl capitalize font-bold font-mono dark:text-slate-50">
        connect with me
      </h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 place-items-center">
        {links
          ? links.map((link) => (
              <ItemContact
                key={randomID()}
                link={link.url}
                description={link.type}
                icon={link.type}
                username={link.url}
              />
            ))
          : null}
      </div>

      <div className="px-2 flex flex-col w-full px-2 md:w-[80%] lg:w-[60%]">
        <form
          onSubmit={(e) => contactHandler(e)}
          className="flex flex-col gap-2 w-full py-4"
        >
          {success ? (
            <Alert key={randomID()}>
              message successfully sent,
              <span className="font-bold relative text-slate-100 before:flex before:items-center before:justify-center  before:absolute before:inset-0 before:-skew-y-3 before:bg-blue-600">
                <span className="relative text-slate-100">thanks !</span>
              </span>
            </Alert>
          ) : null}

          {errors
            ? errors.map((error) => {
                return (
                  <Alert key={randomID()} className="bg-rose-500 font-bold">
                    <span className="capitalize"> error ! </span>
                      <p className="font-normal text-sm lg:text-lg">
                        {error}
                      </p>
                  </Alert>
                );
              })
            : null}

          <FormFloating
            formClassName={formClassName}
            error={errors ? errors["username"] : null}
            name="username"
            text="username"
            placeholder="masukan nama anda..."
          />
          <FormFloating
            formClassName={formClassName}
            error={errors ? errors["email"] : null}
            name="email"
            placeholder="masukan email anda ..."
          />
          <FormFloating
            formClassName={formClassName}
            error={errors ? errors["message"] : null}
            type="textarea"
            name="message"
            placeholder="tulis pesan anda ..."
          />
          <button
            onClick={() => setActive(true)}
            type="submit"
            className="hover:cursor-pointer self-end md:self-start font-sans font-light hover:font-semibold transition-all flex gap-2 items-center justify-center w-24 h-8 p-2 group/btn bg-blue-500 hover:bg-blue-600 outline-lg outline-blue-200 outline hover:outline-blue-400 hover:animate-none hover:shadow-lg text-slate-50 rounded-full"
          >
            <FontAwesomeIcon
              className={`${
                active ? "hover:cursor-wait" : "hover:cursor-pointer"
              } animation group-hover/btn:animate-bounce`}
              icon={!active ? faPaperPlane : faSpinner}
            />
            kirim
          </button>
        </form>
      </div>
    </section>
  );
}
