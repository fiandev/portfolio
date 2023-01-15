import Item from "../partials/Item";

const Project = () => {
  const projects = [
      {
        title: "portofolio",
        preview: "#",
        thumbnail: "https://cdn.waifu.im/7581.jpg"
      },
      {
        title: "portofolio",
        preview: "#",
        thumbnail: "https://cdn.waifu.im/7581.jpg"
      },
      {
        title: "portofolio",
        preview: "#",
        thumbnail: "https://cdn.waifu.im/7581.jpg"
      },
      {
        title: "portofolio",
        preview: "#",
        thumbnail: "https://cdn.waifu.im/7581.jpg"
      },
      {
        title: "portofolio",
        preview: "#",
        thumbnail: "https://cdn.waifu.im/7581.jpg"
      },
      {
        title: "portofolio",
        preview: "#",
        thumbnail: "https://cdn.waifu.im/7581.jpg"
      }
    ]
  
  return (
      <section id="project" className="bg-main p-4 transition-all duration-500 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-slate-50 text-3xl capitalize font-bold font-mono">My Projects</h1>
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            projects.map((project) => <Item link={ project?.preview } thumbnail={ project?.thumbnail } title={ project?.title } />)
          }
        </div>
      </section>
    )
}

export default Project;