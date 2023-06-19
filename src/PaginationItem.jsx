import React from "react";
import classNames from "classnames";

export const getPagesCut = ({ pagesCount, pagesCutCount, currentPage }) => {
  const ceiling = Math.ceil(pagesCutCount / 2);
  const floor = Math.floor(pagesCutCount / 2);

  if (pagesCount < pagesCutCount) {
    return { start: 1, end: pagesCount + 1 };
  } else if (currentPage >= 1 && currentPage <= ceiling) {
    return { start: 1, end: pagesCutCount + 1 };
  } else if (currentPage + floor >= pagesCount) {
    return { start: pagesCount - pagesCutCount + 1, end: pagesCount + 1 };
  } else {
    return { start: currentPage - ceiling + 1, end: currentPage + floor + 1 };
  }
};

const PaginationItem = ({ onPageChange, currentPage, page, isDisabled }) => {
  const liClasses = classNames({
    "page-item": true,
    active: page === currentPage,
    disable: isDisabled,
  });

  return (
    <li
      className={liClasses}
      onClick={() => {
        onPageChange(page);
      }}
    >
      <span className="page-link">{page}</span>
    </li>
  );
};

export default PaginationItem;
