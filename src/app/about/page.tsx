import { Metadata } from "next";
import { lazy } from "react";
import {
  faGraduationCap,
  faGamepad,
  faCakeCandles,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Markup } from "interweave";

import countdown from "@utils/time";
import { randomID } from "@utils/functions";
import ViewportArea from "@components/interactive/ViewportArea";
import Preload from "@components/partials/Preload";
import Image from "@components/partials/Image";

const Item = lazy(() => import("@components/partials/about/Item"));

const title = "fiandev's about",
  thumbnail = "https://fiandev.my.id/graph.png",
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
  ];

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: keywords,
  openGraph: {
    title: title,
    description: description,
  },
};
export default async function About () {
  let json = (await import("@assets/json/data.json")).default;
  let data = json.data;
  let { birtdate = new Date().toLocaleString(), formatted_about = "", avatar = {}, skills = [] } = data;
  
  if (!data) return <Preload />;
  
  let age = countdown(new Date().getTime(), new Date(birtdate).getTime()).years;
    
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
    <div className={`flex flex-col items-center scroll-smooth relative dark:bg-slate-800 p-4`}>
        <Image
            className={`${
              avatar ? "animation-none" : "animation-pulse"
            } w-32 h-32 shadow-md rounded-full border-2 border-sky-400`}
            alt="my avatar"
            srcset={avatar ? avatar.url : ""}
          />
          
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
    </div>
    )
}