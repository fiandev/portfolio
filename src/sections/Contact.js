import { useState, useEffect } from "react";
import {
  faMail,
  faSpinner,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ItemContact from "../partials/ItemContact";
import FormFloating from "../partials/FormFloating";
import Alert from "../partials/contact/Alert";

import API from "../constants/Api";
import { serialize, randomID } from "../utils/functions";

export default function Contact({ links, className }) {
  let [active, setActive] = useState(false);
  let [success, setSuccess] = useState(false);
  let [errors, setErrors] = useState(null);
  
  useEffect(() => {
    //
  }, [active]);
  
  const contactHandler = (e) => {
    let form = e.target;
    let data = new FormData(form);

    e.preventDefault();
    API.sentInbox(data, (response) => {
      try {
        if (response.code === 200) {
          setSuccess(true);
          setErrors(null);
          form.reset();
        } else {
          setErrors(response.error || {});
        }
      } catch (e) {
        console.log(e);
      }

      /* exit and unactivate form animation */
      setActive(false);
    });
  };

  return (
    <section
      id="contact"
      className={ `bg-slate-50 dark:bg-slate-900 min-h-[40vh] py-8 transition-all duration-500 flex flex-col gap-4 justify-center items-center ${className}` }
    >
      <h1 className="text-3xl capitalize font-bold font-mono dark:text-slate-50">
        connect with me
      </h1>

      <div className="grid grid-cols-2 gap-4 auto-cols-auto place-items-center">
        {links ? (
          links.map((link) => (
            <ItemContact
              key={ randomID() }
              link={link.url}
              description={link.type}
              icon={link.type}
              username={link.url}
            />
          ))
        ) : (
          <ItemContact className="animate-pulse blur-4" />
        )}
      </div>

      <div className="w-full px-2 md:px-4 lg:px-8 grid gap-4 place-items-center md:grid-cols-2">
        <form
          onSubmit={(e) => contactHandler(e)}
          className="flex flex-col gap-2 w-full py-4"
        >
          {success ? (
            <Alert
              key={ randomID() }
            >
              message successfully sent,
              <span className="font-bold relative text-slate-100 before:flex before:items-center before:justify-center  before:absolute before:inset-0 before:-skew-y-3 before:bg-blue-600">
                <span className="relative text-slate-100">thanks !</span>
              </span>
            </Alert>
          ) : null}
          
          {errors ? 
           Object.keys(errors).map((key) => {
             return (
              <Alert key={ randomID() } className="bg-rose-500 font-bold">
                <span className="capitalize"> { key } </span>
                { 
                  errors[key].map((error) => {
                    return <p className="font-normal text-sm lg:text-lg"> { error } </p>
                  })
                }
              </Alert>
             )
           }) 
         : null}
          
          <FormFloating error={ errors ? errors["sender"] : null } name="sender" placeholder="write your username ..." />
          <FormFloating error={ errors ? errors["email"] : null } name="email" placeholder="write your email ..." />
          <FormFloating
            error={ errors ? errors["message"] : null }
            type="textarea"
            name="message"
            placeholder="write your message ..."
          />
          <button
            onClick={() => setActive(true)}
            htmlType="submit"
            className="self-end md:self-start font-sans font-light hover:font-semibold transition-all flex gap-2 items-center justify-center w-24 h-8 p-2 group/btn bg-blue-500 hover:bg-blue-600 outline-lg outline-blue-200 outline hover:outline-blue-400 hover:animate-none hover:shadow-lg text-slate-50 rounded-full"
          >
            <FontAwesomeIcon
              className="animation group-hover/btn:animate-bounce"
              icon={!active ? faPaperPlane : faSpinner}
            />
            Send
          </button>
        </form>

        <iframe
          className="shadow-lg outline outline w-[20rem] h-[20rem] hidden md:block rounded-lg outline-gray-400"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.46967054372496!2d112.3358415452334!3d-7.066158695136858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1674358534566!5m2!1sid!2sid"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
