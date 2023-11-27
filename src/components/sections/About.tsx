"use client";
import { useEffect, useState } from "react";
import {
  faGraduationCap,
  faGamepad,
  faCakeCandles,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Markup } from "interweave";

import countdown from "@utils/time";
import Item from "@components/partials/about/Item";

let biodataItems = [
  {
    icon: faUser,
    text: `Name: | Fian`,
  },
  {
    icon: faCakeCandles,
    text: `Age: | ${age} Years Old`,
  },
  {
    icon: faLocationDot,
    text: `State: | Lamongan, East Java`,
  },
  {
    icon: faGraduationCap,
    text: `Education: | High school`,
  },
  {
    icon: faGamepad,
    text: `Hobbies: | code, movies, anime, music, and cat`,
  },
];

export default function About({
  data,
  className,
}: {
  data: any;
  className?: string | number;
}) {
  const [time, setTime] = useState<any>(Date.now());
  const [age, setAge] = useState<number>(0);
  const { formatted_about, skills } = data;

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
            !formatted_about ? "animate-pulse" : "animate-none"
          } md:text-center dark:text-slate-50 text-lg lg:text-xl xl:text-2xl font-serif py-4 font-light`}
        >
          <Markup content={formatted_about} />
        </div>

        <div className="w-full h-fit py-4 items-center grid px-auto md:grid-cols-2 gap-4">
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
              items: biodataItems,
            }}
          />
        </div>

        <div class="flex flex-col items-start">
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Application UI v2.0.0{" "}
                <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                  Latest
                </span>
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on January 13th, 2022
              </time>
              <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <svg
                  class="w-3.5 h-3.5 mr-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                  <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                </svg>{" "}
                Download ZIP
              </a>
            </li>
            <li class="mb-10 ml-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Figma v1.3.0
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 7th, 2021
              </time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li class="ml-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Library v1.2.2
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Released on December 2nd, 2021
              </time>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
        </div>
      </section>
    )
  );
}
