"use client";
import { lazy } from "react";
import { randomID } from "@utils/functions";

const ItemContact = lazy(() => import("@/components/partials/ItemContact"));

export default function Contact({
  links,
  className,
  formClassName,
}: {
  links?: any[];
  className?: string | null;
  formClassName?: string | null;
}) {
  return (
    <section
      id="contact"
      className={`min-h-[40vh] py-8 transition-all duration-500 flex flex-col gap-4 justify-center items-center ${className}`}
    >
      <h1 className="text-3xl capitalize font-bold font-mono dark:text-slate-50">
        connect with me
      </h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 place-items-center">
        {links
          ? links.map((link) => (
              <ItemContact
                key={randomID()}
                link={link.url}
                description={link.type}
                icon={link.type}
                username={link.url}
              />
            ))
          : null}
      </div>
    </section>
  );
}
