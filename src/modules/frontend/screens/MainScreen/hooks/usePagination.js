import { useCallback, useState } from "react";

export const usePagination = (
  initialPage = 0,
  intitalPageSize = 6,
  initialSort = "asc"
) => {
  const [pageNumber, setPageNumber] = useState(initialPage);
  const [pageSize, setPageSize] = useState(intitalPageSize);
  const [sort, setSort] = useState(initialSort);
  const [pageableState, setPageableState] = useState({});

  const incrementPageNumber = useCallback(() => {
    if (!pageableState.last) {
      setPageNumber((prev) => prev + 1);
    }
  }, [pageableState.last]);

  const decrementPageNumber = useCallback(() => {
    if (!pageableState.first) {
      setPageNumber((prev) => prev - 1);
    }
  }, [pageableState.first]);

  const updatePageableState = useCallback((pageable) => {
    setPageableState({
      empty: pageable.empty,
      first: pageable.first,
      last: pageable.last,
      totalPages: pageable.totalPages,
    });
  }, []);

  return {
    pageNumber,
    pageSize,
    sort,
    pageableState,
    setPageNumber,
    setPageSize,
    setSort,
    incrementPageNumber,
    decrementPageNumber,
    updatePageableState,
  };
};

export default usePagination;
