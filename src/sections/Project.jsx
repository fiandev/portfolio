import { useState, useMemo, lazy, Suspense } from "react";

import Loading from "../partials/Loading";

const Item = lazy(() => import("../partials/portfolio/Item"));
const Pagination = lazy(() => import("../partials/Pagination"));
const ViewportArea = lazy(() =>
  import("../components/interactive/ViewportArea")
);

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
      <div className="overflow-scroll w-screen lg:w-[80%] px-2 flex flex-shrink-0 gap-2 md:grid md:grid-cols-3 md:gap-4 place-items-center">
        {currentData ? (
          currentData.map((project) => {
            return (
              <Suspense fallback={<Loading />}>
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
              </Suspense>
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
