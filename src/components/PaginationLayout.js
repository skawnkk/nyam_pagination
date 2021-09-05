import React, { useState, useEffect, useCallback } from "react";
import Pagination from "./Pagination";
export default function PaginationLayout({
  Component,
  itemsPerPage,
  paginationCount,
  yourDataItems,
}) {
  const [dataToShow, setDataToShow] = useState([]);
  const [wholePages, setWholePages] = useState(0);
  const [pageNum, setPageNum] = useState(1);

  const dividedPageItems = useCallback(
    (data) => {
      if (!data.length) return [];
      const pageItems = [];
      for (let i = 0; i < data.length; i += itemsPerPage) {
        const pageUsers = data.slice(i, i + itemsPerPage);
        pageItems.push(pageUsers);
      }
      return pageItems;
    },
    [itemsPerPage]
  );

  useEffect(() => {
    const pagedItem = dividedPageItems(yourDataItems);
    setWholePages(pagedItem.length);
    setDataToShow(pagedItem[pageNum - 1] || []);
  }, [pageNum, dividedPageItems, yourDataItems]);

  return (
    <div>
      <Component dataToShow={dataToShow} />
      <Pagination
        paginationCount={paginationCount}
        wholePages={wholePages}
        pageNum={pageNum}
        setPageNum={setPageNum}
      />
    </div>
  );
}
