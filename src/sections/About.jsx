import { useEffect, useState } from "react";
import {
  faGraduationCap,
  faGamepad,
  faCakeCandles,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import countdown from "../utils/time";
import { randomID } from "../utils/functions";
import Item from "../partials/about/Item";

const About = ({ about, className }) => {
  const [time, setTime] = useState(Date.now());
  const [age, setAge] = useState(0);

  useEffect(() => {
    const birtdate = new Date("13 June 2005, 11:00:00").getTime();
    // const interval = setInterval(() => setTime(Date.now()), 1000);
    let { years } = countdown(time, birtdate);

    setAge(years);
    return () => {
      // clearInterval(interval);
    };
  }, []);

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
              return <p key={randomID()}>{text}</p>;
            })
          : "loading ..."}
      </div>

      <div className="w-full h-fit grid px-auto md:grid-cols-2 gap-4 text-md">
        <Item
          className="bg-blue-600"
          data={{
            label: "education",
            items: [
              {
                icon: faGraduationCap,
                text: "sd putra Indonesia|(2012 - 2018)",
              },
              {
                icon: faGraduationCap,
                text: "smp al-amin surabaya|(2018 - 2021)",
              },
              {
                icon: faGraduationCap,
                text: "smk abdurahman wahid|(2021 - 2024)",
              },
            ],
          }}
        />
        <Item
          className="bg-rose-600"
          data={{
            label: "biodata",
            items: [
              {
                icon: faCakeCandles,
                text: `Age: |${age} Years Old`,
              },
              {
                icon: faLocationDot,
                text: `State: |Lamongan, East Java`,
              },
              {
                icon: faGamepad,
                text: `Hobbies: |code, movies, anime, music, and cat`,
              },
            ],
          }}
        />
      </div>
    </section>
  );
};

export default About;
