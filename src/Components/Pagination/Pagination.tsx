import React, { useState } from 'react';
import cn from 'classnames';
import css from './Pagination.module.scss';

interface PaginationProps {
  activePage: number;
  totalItems: number;
  perPage: number;
  withActions?: boolean;
  classes?: {
    btn?: string;
    activeBtn?: string;
  };
  onChangePage: (newPage: number) => void;
}

function Pagination({
  activePage,
  totalItems,
  perPage,
  withActions,
  classes,
  onChangePage
}: PaginationProps) {
  const [active, setActive] = useState<number>(activePage);

  onChangePage = (newPage: number) => {
    active !== newPage && setActive(newPage);
  };

  const pages = Math.ceil(totalItems / perPage);
  return (
    <div>
      {withActions && (
        <button
          className={cn(css.btn, classes?.btn)}
          onClick={() => onChangePage(active - 1)}
          disabled={active < 2 && true}
        >
          Previous
        </button>
      )}

      {Array.from({ length: pages }).map((page, ind) => {
        page = (
          <button
            key={ind}
            className={cn(css.btn, classes?.btn, { [css.activeBtn]: ind === active - 1 })}
            onClick={() => onChangePage(ind + 1)}
          >
            {ind + 1}
          </button>
        );
        return page;
      })}
      {withActions && (
        <button
          className={cn(css.btn, classes?.btn)}
          onClick={() => onChangePage(active + 1)}
          disabled={active > pages - 1 && true}
        >
          Next
        </button>
      )}
    </div>
  );
}
export default Pagination;
