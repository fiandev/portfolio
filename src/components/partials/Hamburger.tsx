const Hamburger = ({ toggleActive, IsActive, className }) => {
  return (
    <div
      onClick={toggleActive}
      className={`${className} group transition ease-in rounded-md border-main flex flex-col gap-2 justify-center items-center`}
    >
      <span
        className={`block w-8 h-0.5 duration-800 transition ease-in ${
          IsActive ? "transform origin-top-left rotate-45" : ""
        } bg-slate-600 dark:bg-main`}
      ></span>
      <span
        className={`block w-8 h-0.5 delay-100 duration-800 transition ease-in ${
          IsActive ? "transform origin-center scale-0" : ""
        } bg-slate-600 dark:bg-main`}
      ></span>
      <span
        className={`block w-8 h-0.5 duration-800 transition ease-in ${
          IsActive ? "transform origin-bottom-left -rotate-45" : ""
        } bg-slate-600 dark:bg-main`}
      ></span>
    </div>
  );
};

export default Hamburger;
