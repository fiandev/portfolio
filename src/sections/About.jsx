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

const About = ({ data, className }) => {
  const [time, setTime] = useState(Date.now());
  const [age, setAge] = useState(0);
  const { about, skills } = data;

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
    data && (
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
          } md:text-center dark:text-slate-50 lg:text-2xl font-light font-serif`}
        >
          {about.split("\n").map((text) => {
            return <p key={randomID()}>{text}</p>;
          })}
        </div>

        <div className="w-full h-fit py-4 items-center grid px-auto md:grid-cols-2 gap-4 text-md">
          <Item
            className="bg-rose-600"
            data={{
              label: "my skills",
              items: skills.map((skill) => {
                return {
                  image: `https://raw.githubusercontent.com/fiandev/static-assets/master/icons/${skill.name.toLowerCase()}.svg`,
                  text: `${skill.name} | (${skill.level})`,
                };
              }),
            }}
          />
          <Item
            className="bg-blue-600"
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
    )
  );
};

export default About;
