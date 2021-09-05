import React, { useState, useEffect } from "react";
import { justEngAndCode as yourDataItems } from "../utils/mockData";
import Pagination from "./Pagination";
import YourComponent from "./YourComponent";
export default function PaginationLayout() {
  const PAGE_SIZE = 5;
  const [dataToShow, setDataToShow] = useState([]);
  const [wholePages, setWholePages] = useState(0);
  const [pageNum, setPageNum] = useState(1);

  const dividedPageItems = (data) => {
    if (!data.length) return [];
    const pageItems = [];
    for (let i = 0; i < data.length; i += PAGE_SIZE) {
      const pageUsers = data.slice(i, i + PAGE_SIZE);
      pageItems.push(pageUsers);
    }
    return pageItems;
  };

  useEffect(() => {
    const pagedItem = dividedPageItems(yourDataItems);
    setWholePages(pagedItem.length);
    setDataToShow(pagedItem[pageNum - 1] || []);
  }, [pageNum, yourDataItems]);

  return (
    <div>
      <YourComponent dataToShow={dataToShow} />
      <Pagination
        PAGE_SIZE={PAGE_SIZE}
        wholePages={wholePages}
        pageNum={pageNum}
        setPageNum={setPageNum}
      />
    </div>
  );
}
