import Shapes from "@/components/partials/Shapes";

export default function HomePreview() {
  return (
    <section
      id="preview"
      className={`preview-content bg-slate-200 dark:bg-slate-900 bg-fixed relative w-screen h-screen md:min-h-screen flex flex-col gap-2 items-center justify-center lg:flex-row-reverse md:justify-center lg:px-24`}
    >
      <div className="group flex items-center justify-center lg:justify-between lg:px-8">
        <Shapes className="h-48 w-48 max-w-48 max-h-48 lg:max-w-72 lg:max-h-72 lg:w-72 lg:h-72 p-4 relative bg-gradient-to-b from-sky-500 to-violet-400 border shadow-md p-8 overflow-hidden flex justify-center items-center">
          <img
            className={`w-full h-full shadow-md rounded-full border-2 border-sky-400`}
          />
        </Shapes>
      </div>

      <div className="relative w-full lg:w-90 flex flex-col items-center lg:items-start gap-2">
        <h1
          className={`text-shadow-md text-3xl capitalize font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-sky-600 text-center lg:text-start`}
        >
          loading ...
        </h1>
        <p className="dark:text-slate-100 mx-4 lg:mx-0 text-sm md:w-1/2 lg:w-full md:text-lg lg:text-2xl font-light font-serif text-center lg:text-start">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
          possimus ipsum neque mollitia ea ducimus odit maiores laboriosam ipsam
          corrupti quasi quam distinctio soluta nulla atque voluptas aspernatur.
          Repellat, minima.
        </p>

        <a
          name="contact me"
          href="#"
          className="font-bold transition-all duration-800 flex items-center justify-center text-sm lg:text-md px-4 py-2 rounded-sm text-slate-100 bg-sky-600 dark:bg-blue-600 shadow-lg outline outline-inherit hover:outline-blue-600 hover:outline-offset-2 hover:rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-sky-400 capitalize"
        >
          contact me
        </a>
      </div>
    </section>
  );
}
