import { Metadata } from "next";
import { lazy } from "react";
import { randomID } from "@utils/functions";

import { ScrollableArea } from "@components/interactive/ScrollableArea";

const ViewportArea = lazy(() => import("@components/interactive/ViewportArea"));

const Profile = lazy(() => import("@components/sections/Profile"));
const Contact = lazy(() => import("@components/sections/Contact"));
const Project = lazy(() => import("@components/sections/Project"));
const WorkExperience = lazy(
  () => import("@components/sections/WorkExperience"),
);
const EducationTimeLine = lazy(
  () => import("@components/sections/EducationTimeLine"),
);

const title = "fiandev's website",
  thumbnail = "/logo.png",
  description =
    "I am a fullstack web developer, my favorite programming languages are JavaScript, PHP and Python, don't hesitate to contact me.",
  keywords = [
    "web web developer",
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
    "fiandev",
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

export default async function Home() {
  let json = (await import("@assets/json/data.json")).default;
  let Data = json.data;

  return (
    <div className={`flex flex-col scroll-smooth relative`}>
      <Profile data={Data} />

      <WorkExperience />
      <EducationTimeLine />

      <ViewportArea specialKey={randomID()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="bg-slate-50/40 dark:bg-slate-900/40 backdrop-blur-sm outline-0 border-0"
        >
          <path
            className="fill-sky-100/40 dark:fill-main/40"
            fillOpacity="1"
            d="M0,192L0,32L48,32L48,64L96,64L96,128L144,128L144,256L192,256L192,160L240,160L240,160L288,160L288,224L336,224L336,288L384,288L384,160L432,160L432,192L480,192L480,64L528,64L528,224L576,224L576,96L624,96L624,224L672,224L672,32L720,32L720,224L768,224L768,192L816,192L816,160L864,160L864,224L912,224L912,224L960,224L960,128L1008,128L1008,128L1056,128L1056,224L1104,224L1104,160L1152,160L1152,64L1200,64L1200,32L1248,32L1248,192L1296,192L1296,96L1344,96L1344,288L1392,288L1392,224L1440,224L1440,320L1392,320L1392,320L1344,320L1344,320L1296,320L1296,320L1248,320L1248,320L1200,320L1200,320L1152,320L1152,320L1104,320L1104,320L1056,320L1056,320L1008,320L1008,320L960,320L960,320L912,320L912,320L864,320L864,320L816,320L816,320L768,320L768,320L720,320L720,320L672,320L672,320L624,320L624,320L576,320L576,320L528,320L528,320L480,320L480,320L432,320L432,320L384,320L384,320L336,320L336,320L288,320L288,320L240,320L240,320L192,320L192,320L144,320L144,320L96,320L96,320L48,320L48,320L0,320L0,320Z"
          ></path>
        </svg>
      </ViewportArea>

      <Project className="lg:px-[10vw]" projects={Data.portfolios} />

      <ViewportArea specialKey={randomID()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="rotate-180 bg-slate-50/40 dark:bg-slate-900/40 backdrop-blur-sm outline-0 border-0"
        >
          <path
            className="fill-sky-100/40 dark:fill-main/40"
            fillOpacity="1"
            d="M0,32L0,64L48,64L48,256L96,256L96,96L144,96L144,0L192,0L192,224L240,224L240,192L288,192L288,256L336,256L336,256L384,256L384,288L432,288L432,96L480,96L480,96L528,96L528,320L576,320L576,288L624,288L624,320L672,320L672,224L720,224L720,224L768,224L768,288L816,288L816,128L864,128L864,224L912,224L912,224L960,224L960,96L1008,96L1008,0L1056,0L1056,64L1104,64L1104,128L1152,128L1152,192L1200,192L1200,96L1248,96L1248,64L1296,64L1296,128L1344,128L1344,0L1392,0L1392,128L1440,128L1440,320L1392,320L1392,320L1344,320L1344,320L1296,320L1296,320L1248,320L1248,320L1200,320L1200,320L1152,320L1152,320L1104,320L1104,320L1056,320L1056,320L1008,320L1008,320L960,320L960,320L912,320L912,320L864,320L864,320L816,320L816,320L768,320L768,320L720,320L720,320L672,320L672,320L624,320L624,320L576,320L576,320L528,320L528,320L480,320L480,320L432,320L432,320L384,320L384,320L336,320L336,320L288,320L288,320L240,320L240,320L192,320L192,320L144,320L144,320L96,320L96,320L48,320L48,320L0,320L0,320Z"
          ></path>
        </svg>
      </ViewportArea>
      <ViewportArea>
        <Contact className="bg-slate-50/40 dark:bg-slate-900/40 backdrop-blur-sm" links={Data.links} />
      </ViewportArea>
    </div>
  );
}
