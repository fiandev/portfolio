import { Metadata } from "next";

import ServiceList from "@components/sections/ServiceList";
import Contact from "@components/sections/Contact";
import Preload from "@components/partials/Preload";

const title = "fiandev's service",
  thumbnail = "https://fiandev.my.id/graph.png",
  description =
    "see all the list of services that I provide, as an IT Support freelancer",
  keywords = [
    "service",
    "services",
    "pricing",
    "fiandev",
    "freelance",
    "freelancer",
    "it support",
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

export default function Services({ data, services }) {
  let data = (await import("@assets/json/data.json")).default.data;
  let services = (await import("@assets/json/services.json")).default;
  
  return (
    <div className={`pt-8 scroll-smooth relative dark:bg-slate-800`}>
      <ServiceList services={ services } className="py-4 mt-4" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="outline-0 border-0"
      >
        <path
          className="fill-sky-100 dark:fill-main"
          fillOpacity="1"
          d="M0,32L0,64L48,64L48,256L96,256L96,96L144,96L144,0L192,0L192,224L240,224L240,192L288,192L288,256L336,256L336,256L384,256L384,288L432,288L432,96L480,96L480,96L528,96L528,320L576,320L576,288L624,288L624,320L672,320L672,224L720,224L720,224L768,224L768,288L816,288L816,128L864,128L864,224L912,224L912,224L960,224L960,96L1008,96L1008,0L1056,0L1056,64L1104,64L1104,128L1152,128L1152,192L1200,192L1200,96L1248,96L1248,64L1296,64L1296,128L1344,128L1344,0L1392,0L1392,128L1440,128L1440,320L1392,320L1392,320L1344,320L1344,320L1296,320L1296,320L1248,320L1248,320L1200,320L1200,320L1152,320L1152,320L1104,320L1104,320L1056,320L1056,320L1008,320L1008,320L960,320L960,320L912,320L912,320L864,320L864,320L816,320L816,320L768,320L768,320L720,320L720,320L672,320L672,320L624,320L624,320L576,320L576,320L528,320L528,320L480,320L480,320L432,320L432,320L384,320L384,320L336,320L336,320L288,320L288,320L240,320L240,320L192,320L192,320L144,320L144,320L96,320L96,320L48,320L48,320L0,320L0,320Z"
        ></path>
      </svg>
      <Contact
        formClassName="dark:outline-sky-100 dark:hover:outline-main dark:text-slate-100"
        className="bg-gradient-to-b from-sky-100 to-slate-50 dark:text-100 dark:from-main dark:to-slate-900"
        links={data.links}
      />
    </div>
  );
}