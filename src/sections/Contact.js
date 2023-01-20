import { useState, useEffect } from "react";
import { faMail, faSpinner, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ItemContact from "../partials/ItemContact";
import FormFloating from "../partials/FormFloating";

export default function Contact ({ links }) {
  let [active, setActive] = useState(false);
  const contactHandler = (e) => {
    let form = e.target;
    
    e.preventDefault();
    setActive(!active);
  }
  
  return (
      <section id="contact" className="bg-slate-50 min-h-[40vh] py-8 transition-all duration-500 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-3xl capitalize font-bold font-mono">Connect With Me</h1>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {
          links.map(link => <ItemContact link={ link.url } description={ link.type } icon={ link.type } username={ link.url } />)
        }
        </div>
        
        <div className="w-full px-2 md:px-4 grid place-center md:grid-cols-2">
          <form onSubmit={ (e) => contactHandler(e) } className="flex flex-col gap-2 w-full py-4">
            <FormFloating name="username" placeholder="write your username ..." />
            <FormFloating name="email" placeholder="write your email ..." />
            <FormFloating type="textarea" name="message" placeholder="write your message ..." />
            <button type="submit" className="self-end md:self-start font-sans font-light hover:font-semibold transition-all flex gap-2 items-center justify-center w-24 h-8 p-2 group/btn bg-blue-500 hover:bg-blue-600 outline-lg outline-blue-200 outline hover:outline-blue-400 hover:animate-none hover:shadow-lg text-slate-50 rounded-full">
             <FontAwesomeIcon className="animation group-hover/btn:animate-bounce" icon={ !active ? faPaperPlane : faSpinner } />
             Send
            </button>
          </form>
        </div>
      </section>
    )
}