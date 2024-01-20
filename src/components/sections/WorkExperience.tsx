export default async function WorkExperience() {
  let experiences = (await import("@assets/json/work-experiences.json")).default.data;
  
  return (
    <section
      id="work-experience"
      className="w-full bg-slate-50 dark:bg-slate-900 px-4 py-8 inset-x-0 transition-all duration-1000 flex flex-col justify-start gap-4 lg:px-8"
    >
      <h1 className="text-3xl capitalize font-bold font-mono dark:text-slate-50">
        Work Experience
      </h1>
      <div className="self-start flex flex-col px-4">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {
            experiences ? 
              experiences.map((experience) => {
                return (
                    <li className="mb-10 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg
                          className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                      </span>
                      <h2 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        { experience.position }
                        {
                          experience.active ?
                            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                              Active
                            </span>
                          : null
                        }
                      </h2>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                      Started on { experience.date }
                    </time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                      { experience.description }
                    </p>
                  </li>
                
                )
              })
            : null
          }
        </ol>
      </div>
    </section>
  );
}
