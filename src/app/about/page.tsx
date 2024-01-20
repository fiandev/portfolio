import { Metadata } from "next";
import { lazy } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faGraduationCap,
  faGamepad,
  faCakeCandles,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import countdown from "@utils/time";
import { randomID } from "@utils/functions";

const ViewportArea = lazy(() => import("@components/interactive/ViewportArea"));
const Image = lazy(() => import("@components/partials/Image"));
const Preload = lazy(() => import("@components/partials/Preload"));
const Item = lazy(() => import("@components/partials/about/Item"));

const title = "fiandev's about",
  thumbnail = "/graph.png",
  description =
    "fiandev is a fullstack developer from Indonesia, who masters several programming languages.",
  keywords = [
    "fiandev about",
    "about fiandev",
    "about",
    "biodata",
    "skills",
    "profile",
    "fiandev",
    "web web developer",
    "php",
    "js",
    "python",
    "javascript",
    "webdev",
    "freelance",
    "freelancer",
    "fullstack",
    "frontend",
    "backend",
    "backend developer",
    "frontend developer",
    "fullstack developer",
    "it support",
  ];

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: keywords,
  openGraph: {
    title: title,
    description: description,
    images: [thumbnail],
  },
};

export default async function About() {
  let json = (await import("@assets/json/data.json")).default;
  let data = json.data;
  let {
    birthdate = new Date().toLocaleString(),
    about = "",
    avatar = {},
    skills = [],
  } = data;

  if (!data) return <Preload />;

  let age = countdown(
    new Date().getTime(),
    new Date(birthdate).getTime(),
  ).years;

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

  return (
    <div
      className={`bg-slate-200 dark:bg-slate-800 flex flex-col gap-2 items-center scroll-smooth relative dark:bg-slate-800 p-4`}
    >
      <div className="flex flex-col items-center lg:flex-row lg:justify-around gap-2">
        <Image
          className={`${
            avatar ? "animation-none" : "animation-pulse"
          } w-32 h-32 shadow-md rounded-full border-2 border-slate-800 dark:border-slate-100`}
          alt="my avatar"
          srcset={avatar ? avatar.url : ""}
        />

        <div
          className={`${
            !about ? "animate-pulse" : "animate-none"
          } w-3/4 flex flex-col gap-2 dark:text-slate-50 text-lg lg:text-xl xl:text-2xl font-serif py-4 font-light text-center lg:text-start`}
        >
          {about.split("\n").map((v) => {
            return (
              <p className="w-full bg-transparent outline-0 border-0">{v}</p>
            );
          })}
        </div>
      </div>
      <div className="w-full h-fit py-4 items-center grid px-auto md:grid-cols-2 gap-4">
        <Item
          className="bg-blue-600"
          data={{
            label: "biodata",
            items: biodataItems,
          }}
        />
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
      </div>
    </div>
  );
}
