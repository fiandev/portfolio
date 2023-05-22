import { useState, useEffect } from "react";
import Theme from "../contexts/Theme";
import Shapes from "../partials/Shapes";

const Profile = ({ Data }) => {
  const [IsDark /* SetIsDark */] = useState(Theme());
  const [Style, setStyle] = useState(null);

  useEffect(() => {
    setStyle({
      // todo
    });
  }, [IsDark]);

  return (
    <section
      id="profile"
      style={Style}
      className={`${
        Data ? "animation-none" : "animation-pulse"
      } bg-slate-200 dark:bg-slate-900 bg-fixed relative w-screen pt-20 h-screen md:min-h-screen flex flex-col gap-2 items-center lg:flex-row-reverse md:justify-center lg:px-24`}
    >
      <div className="group flex items-center justify-center lg:justify-between lg:px-8">
        <Shapes className="h-48 w-48 max-w-48 max-h-48 p-4 relative bg-gradient-to-b from-sky-500 to-violet-400 border shadow-md p-8 overflow-hidden flex justify-center items-center">
          <img
            className={ `${ Data ? "animation-none" : "animation-pulse" } w-full h-full shadow-md rounded-full border-2 border-sky-400` }
            alt="my avatar"
            src={Data ? Data.avatar.base64 : ""}
          />
        </Shapes>
      </div>

      <div className="relative w-full lg:w-90 flex flex-col items-center lg:items-start gap-2">
        <span className="text-shadow-md text-2xl lg:text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-sky-600 text-center lg:text-start">
          {Data ? Data.name : "loading ..."}
        </span>
        <p className="dark:text-slate-100 mx-4 lg:mx-0 text-sm lg:text-md font-light font-serif text-center lg:text-start">
          {Data
            ? Data.slogan
              ? Data.slogan
              : "hi I'm Fian junior fullstack web developer from Indonesia 🇮🇩"
            : "loading ..."}
        </p>

        <a
          name="contact me"
          href="https:///t.me/fiandev"
          className="transition-all duration-800 text-sm lg:text-md w-fit h-fit px-4 py-2 rounded-sm text-slate-50 bg-main shadow-lg outline outline-inherit hover:outline-blue-600 hover:outline-offset-2 hover:rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-sky-400 capitalize"
        >
          contact me
        </a>
      </div>
    </section>
  );
};

export default Profile;
