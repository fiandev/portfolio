"use client";
import Link from "next/link";

export default function FooterBackLinks({ links }) {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        Links
      </h2>
      <ul className="text-gray-500 dark:text-gray-400 font-medium">
        {links
          ? links.map((link) => {
            return (
              <li>
                <Link href={link.href || "#"} className="hover:underline">
                  {link.text}
                </Link>
              </li>
            );
          })
          : null}
      </ul>
    </div>
  );
}
