// import { Markup } from "interweave";

import Shapes from "@components/partials/Shapes";
import Image from "@components/partials/Image";

const Profile = ({ data }: { data: any }) => {
  return (
    <section
      id="profile"
      className={`${
        !data ? "preview-content" : ""
      } bg-slate-200 dark:bg-slate-800 bg-fixed relative w-screen h-screen md:min-h-screen flex flex-col gap-2 items-center justify-center lg:flex-row-reverse md:justify-center lg:px-24`}
    >
      <div className="group flex items-center justify-center lg:justify-between lg:px-8">
        <Shapes className="h-48 w-48 max-w-48 max-h-48 lg:max-w-72 lg:max-h-72 lg:w-72 lg:h-72 p-4 relative bg-gradient-to-b from-sky-500 to-slate-100 border shadow-md p-8 overflow-hidden flex justify-center items-center">
          <Image
            className={`${
              data ? "animation-none" : "animation-pulse"
            } w-full h-full shadow-md rounded-full border-2 border-sky-400`}
            alt="my avatar"
            srcset={data ? data.avatar.url : ""}
          />
        </Shapes>
      </div>

      <div className="relative w-full lg:w-90 flex flex-col items-center lg:items-start gap-2">
        <h1
          className={`${
            !data.name ? "animate-pulse" : ""
          } text-shadow-md text-3xl capitalize font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-sky-600 text-center lg:text-start`}
        >
          {data ? data.name : "loading ..."}
        </h1>
        <p className="dark:text-slate-100 mx-4 lg:mx-0 text-sm md:w-1/2 lg:w-full md:text-lg lg:text-2xl font-light font-serif text-center lg:text-start">
          {data ? data.slogan : "loading ..."}
        </p>

        <div className="flex items-center gap-2">
          <a
            name="contact me"
            href="https://wa.me/+62895380689955"
            className="font-bold transition-all duration-800 flex items-center justify-center text-sm lg:text-md px-4 py-2 rounded-sm text-slate-100 bg-sky-600 dark:bg-blue-600 shadow-lg outline outline-inherit hover:outline-blue-600 hover:outline-offset-2 hover:rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-sky-400 capitalize"
          >
            contact me
          </a>
          <a
            name="download-CV"
            href="https://drive.google.com/file/d/1AXPQ-rh-8ux-0fG80dG00buF6RKUFdn6/view?usp=drivesdk"
            className="font-bold transition-all duration-800 flex items-center justify-center text-sm lg:text-md px-4 py-2 rounded-sm text-sky-600 bg-slate-100 dark:bg-blue-600 shadow-lg outline outline-inherit hover:outline-slate-100 hover:outline-offset-2 hover:rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-slatw-100 capitalize"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
