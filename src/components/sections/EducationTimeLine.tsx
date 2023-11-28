import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-brands-svg-icons";

export default function EducationTimeLine() {
  return (
    <section
      id="education-timeline"
      className="bg-slate-50 dark:bg-slate-900 px-4 py-8 inset-x-0 transition-all duration-1000 flex flex-col justify-start items-center gap-4 lg:px-8"
    >
      <h1 className="text-3xl capitalize font-bold font-mono dark:text-slate-50">
        Education
      </h1>
      <div className="flex flex-col items-center justify-center">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <FontAwesomeIcon
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                icon={faGraduationCap}
              />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              SD Putra Indonesia, Surabaya 60293
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
              June 2012 - June 2018
            </time>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <FontAwesomeIcon
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                icon={faGraduationCap}
              />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              SMP Al - Amin Surabaya, 60293
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
              June 2018 - June 2021
            </time>
          </li>
          <li className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <FontAwesomeIcon
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                icon={faGraduationCap}
              />
            </span>
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              SMK Abdurrahman Wahid, 62254
            </h3>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
              Active
            </span>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">
              June 2021 - June 2024
            </time>
          </li>
        </ol>
      </div>
    </section>
  );
}
