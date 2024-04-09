import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import usePagination from "@hooks/usePagination";
import classnames from "classnames";
import { randomID } from "@utils/functions";

type Props = {
  onPageChange?: Function,
  totalCount: number,
  currentPage: number,
  siblingCount: number,
  pageSize: number,
  className?: string,
}
const Pagination = (props: Props) => {
  const {
    onPageChange = () => { },
    totalCount = 0,
    siblingCount = 1,
    currentPage = 1,
    pageSize = 1,
    className = "",
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      key={randomID()}
      className={classnames("flex gap-2 items-center", {
        [className]: className,
      })}
    >
      {/* Left navigation arrow */}
      <li
        className={classnames(
          "p-2 rounded-sm w-6 h-6 flex items-center justify-center text-main bg-slate-50 text-xs",
          {
            hidden: currentPage === 1,
          },
        )}
        key={randomID()}
        onClick={onPrevious}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </li>
      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === "DOTS") {
          return (
            <li
              key={randomID()}
              className="p-2 rounded-sm w-6 h-6 flex items-center justify-center text-main bg-slate-50 text-xs dots"
            >
              &#8230;
            </li>
          );
        }

        // Render our Page Pills
        return (
          <li
            className={`p-2 rounded-sm w-6 h-6 flex items-center justify-center text-xs ${pageNumber === currentPage
              ? "bg-main text-slate-50 border border-slate-50"
              : "text-main bg-slate-50"
              }`}
            key={randomID()}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={classnames(
          "p-2 rounded-sm w-6 h-6 flex items-center justify-center text-main bg-slate-50 text-xs",
          {
            hidden: currentPage === lastPage,
          },
        )}
        key={randomID()}
        onClick={onNext}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </li>
    </ul>
  );
};

export default Pagination;
