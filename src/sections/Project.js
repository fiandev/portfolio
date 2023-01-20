import Item from "../partials/Item";

const Project = ({ portfolios }) => {
  return (
      <section id="project" className="bg-main p-4 transition-all duration-500 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-slate-50 text-3xl capitalize font-bold font-mono">My Projects</h1>
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
           portfolios.map((portfolio) => <Item link={ portfolio.link } thumbnail={ portfolio.thumbnail } title={ portfolio.title } />)
          }
        </div>
      </section>
    )
}

export default Project;