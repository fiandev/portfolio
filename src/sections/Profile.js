import { useState, useEffect } from "react";
import Theme from "../contexts/Theme";
import Shapes from "../partials/Shapes";
import bgDark from "../../assets/static/bg-dark.jpg";
import bgLight from "../../assets/static/bg-light.jpg";
import myPhoto from "../../assets/static/me.png";

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    x: rect.left + window.scrollX,
    y: rect.top + window.scrollY
  };
}
  
const Profile = () => {
  const [IsDark, SetIsDark] = useState( Theme() );
  const [Style, setStyle] = useState(null);
  
  useEffect(() => {
    setStyle({
      background: `url(${IsDark ? bgDark : bgLight})`
    })
  }, [IsDark])
  
  return (
      <section id="profile" style={ Style } className={ `bg-fixed relative w-screen pt-20 h-screen md:min-h-screen flex flex-col gap-2 items-center lg:flex-row-reverse md:justify-center lg:px-24` }>
        
        <div className="group flex items-center justify-center lg:justify-between lg:px-8">
          <Shapes className="h-48 w-48 max-w-48 max-h-48 p-4 relative bg-gradient-to-b from-sky-500 to-violet-400 border shadow-md p-8 overflow-hidden flex justify-center items-center">
            <img className="w-full h-full shadow-md" alt="my photo" src={ myPhoto } />
          </Shapes>
        </div>
        
        <div className="relative w-full lg:w-90 flex flex-col items-center lg:items-start gap-2">
          <span className="text-shadow-md text-2xl lg:text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-sky-600 text-center lg:text-start">
            Aditia Akbar Putra Alfiansa 
          </span>
          <p className="mx-4 md:mx-0 text-sm lg:text-md font-light font-serif text-justify lg:text-start">
            Hi, I'm Fian my hobby is learn programming and technology, I'm interested learn that's because is so cool 😊
          </p>
          
          <a href="https://cakeresume.com/aditia-akbar" className="transition-all duration-800 text-sm lg:text-md w-fit h-fit px-4 py-2 rounded-sm text-slate-50 bg-main shadow-lg outline outline-inherit hover:outline-blue-600 hover:outline-offset-2 hover:rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-sky-400">Download CV</a>
        </div>
        
      </section>
    )
}

export default Profile;