import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCalendarDays,
  faCakeCandles,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import countdown from "../utils/time";
import { useEffect, useState } from "react";

const About = ({ about, className }) => {
  const [time, setTime] = useState(Date.now());
  const [age, setAge] = useState(0);

  useEffect(() => {
    const birtdate = new Date("13 June 2005, 11:00:00").getTime();
    const interval = setInterval(() => setTime(Date.now()), 1000);
    let { years } = countdown(time, birtdate);

    setAge(years);
    return () => {
      clearInterval(interval);
    };
  }, [time, age]);

  return (
    <section
      id="about"
      className={`bg-slate-50 dark:bg-slate-900 px-4 py-8 inset-x-0 transition-all duration-1000t flex flex-col gap-4 justify-start items-center lg:px-8 ${className}`}
    >
      <h1 className="text-3xl capitalize font-bold font-mono dark:text-slate-50">
        About Me
      </h1>
      <div
        className={`${
          !about ? "animate-pulse" : "animate-none"
        } dark:text-slate-50 lg:text-xl font-light font-serif`}
      >
        {about
          ? about.split("\n").map((text) => {
              return <p>{text}</p>;
            })
          : "loading ..."}
      </div>

      <div className="w-full h-fit grid px-auto md:grid-cols-2 gap-4 text-md">
        <div className="p-4 bg-blue-600 rounded-md">
          <h1 className="text-bold text-slate-50 capitalize text-md md:text-lg lg:text-xl">
            education
          </h1>
          <ul className="flex flex-col items-start text-slate-100">
            <li className="flex gap-2 text-semibold items-center">
              <FontAwesomeIcon icon={faGraduationCap} />
              <p>
                SD Putra Indonesia{" "}
                <span className="text-bold text-slate-100">(2012 - 2018)</span>
              </p>
            </li>
            <li className="flex gap-2 text-semibold items-center">
              <FontAwesomeIcon icon={faGraduationCap} />
              <p>
                SMP Al-Amin Surabaya{" "}
                <span className="text-bold text-slate-100">(2018 - 2021)</span>
              </p>
            </li>
            <li className="flex gap-2 text-semibold items-center">
              <FontAwesomeIcon icon={faGraduationCap} />
              <p>
                SMK Abdurahman Wahid [computer and network engineer]{" "}
                <span className="text-bold text-slate-100">(2021 - 2024)</span>
              </p>
            </li>
          </ul>
        </div>

        <div className="p-4 bg-rose-600 rounded-md">
          <h1 className="text-bold text-slate-50 capitalize text-md md:text-lg lg:text-xl">
            biodata
          </h1>
          <ul className="flex flex-col items-start text-slate-100">
            <li className="flex gap-2 text-semibold items-center ">
              <FontAwesomeIcon icon={faCalendarDays} />
              <p>
                Birthdate:{" "}
                <span className="text-bold text-slate-100">13 June 2005</span>
              </p>
            </li>
            <li className="flex gap-2 text-semibold items-center ">
              <FontAwesomeIcon icon={faCakeCandles} />
              <p>
                Age:{" "}
                <span className="text-bold text-slate-100">
                  {age} Years Old
                </span>
              </p>
            </li>
            <li className="flex gap-2 text-semibold items-center ">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>
                State:{" "}
                <span className="text-bold text-slate-100">
                  Lamongan, East Java
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
