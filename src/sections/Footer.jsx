import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import ViewportArea from "../components/interactive/ViewportArea";
import WaveAnimate from "../assets/svg/WaveAnimate.svg";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <section
      id="footer"
      className="relative w-screen pt-8 capitalize flex flex-col gap-4 bg-gradient-to-t from-sky-500 to-slate-50 dark:from-sky-900 dark:to-slate-900 items-center justify-end text-gray-800"
    >
      <ViewportArea>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <p className="text-md font-serif text-slate-50">
            built with{" "}
            <FontAwesomeIcon icon={faHeart} className="text-rose-400" /> by{" "}
            <span className="font-semibold text-sky-800 dark:text-sky-400 hover:underline">
              {" "}
              fiandev{" "}
            </span>
          </p>
          <p className="text-sm font-serif text-gray-100">
            <span className="font-semibold">@ {year}.</span> all right reserved.
          </p>
        </div>
      </ViewportArea>
      <img className="w-max h-max m-0 p-0" alt="wave animation" src={WaveAnimate} />
    </section>
  );
}
