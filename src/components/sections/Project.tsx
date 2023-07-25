"use client";
import { useState, useMemo, lazy, Suspense } from "react";

import Loading from "@components/partials/Loading";

const Item = lazy(() => import("@components/partials/portfolio/Item"));
const Pagination = lazy(() => import("@components/partials/Pagination"));

let PageSize = 6;

const Project = ({
  projects,
  className,
}: {
  projects: any;
  className?: string | null;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return projects?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, projects]);

  return (
    <section
      id="project"
      className={`bg-sky-100 dark:bg-main p-4 lg:py-8 transition-all duration-500 flex flex-col gap-4 justify-start xl:justify-center items-center ${className}`}
    >
      <h1 className="text-slate-800 dark:text-slate-50 text-3xl capitalize font-bold font-mono">
        My Projects
      </h1>
      <div className="no-scrollbar overflow-scroll w-full flex flex-col items-start md:items-center">
        <div className="transition-all w-fit no-scrollbar overflow-scroll flex items-center flex-shrink-0 gap-2 md:grid md:grid-cols-3 md:gap-4 md:place-items-center">
          {currentData ? (
            currentData.map((project) => {
              return (
                <Suspense fallback={<Loading />}>
                  <Item
                    className="w-52 md:w-full h-72"
                    link={project.preview}
                    stacks={project.stacks}
                    repo={project.repository}
                    thumbnail={project.thumbnail.url}
                    title={project.title}
                    description={project.description}
                  />
                </Suspense>
              );
            })
          ) : (
            <Item className="animate-pulse " />
          )}
        </div>
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
