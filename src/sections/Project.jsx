import { useState, useMemo } from "react";

import Item from "../partials/portfolio/Item";
import Pagination from "../partials/Pagination";
import ViewportArea from "../components/interactive/ViewportArea";

let PageSize = 6;

const Project = ({ projects, className }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return projects?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, projects]);

  return (
    <section
      id="project"
      className={`bg-main p-4 lg:py-8 transition-all duration-500 flex flex-col gap-4 justify-start items-center ${className}`}
    >
      <h1 className="text-slate-50 text-3xl capitalize font-bold font-mono">
        My Projects
      </h1>
      <div className="overflow-scroll w-screen px-2 flex flex-shrink-0 gap-2 md:grid md:grid-cols-3 md:gap-4 place-items-center">
        {currentData ? (
          currentData.map((project) => {
            return (
              <ViewportArea className="w-52 md:w-full h-72">
                <Item
                  className="w-52 md:w-full h-72"
                  link={project.preview}
                  stacks={project.stacks}
                  repo={project.repository}
                  thumbnail={project.thumbnail}
                  title={project.title}
                  description={project.description}
                />
              </ViewportArea>
            );
          })
        ) : (
          <Item className="animate-pulse " />
        )}
      </div>

      <Pagination
        className="pagination"
        currentPage={currentPage}
        totalCount={projects?.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </section>
  );
};

export default Project;
