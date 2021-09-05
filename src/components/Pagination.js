import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { NAME } from "../utils/constants";
//paginationCount:보여주고싶은 페이지버튼갯수
//wholePages:실제 전체 페이지수
//pageNum:현재보고있는 페이지 (시작:1페이지)

export default function Pagination({ paginationCount, wholePages, pageNum, setPageNum }) {
  const [paginationBtns, setPaginationBtns] = useState([]);

  const changeMainPage = useCallback(
    (pageNum) => {
      const totalPageLists = Array.from({ length: wholePages }, (_, idx) => idx + 1);
      const remains = wholePages - pageNum;
      const half = paginationCount / 2;
      if (wholePages <= paginationCount) return totalPageLists.slice(0, wholePages);
      if (pageNum <= half) return totalPageLists.slice(0, paginationCount);
      return pageNum > half && remains <= half
        ? totalPageLists.slice(pageNum - paginationCount + remains, wholePages)
        : totalPageLists.slice(pageNum - half - 1, pageNum + half - 1);
    },
    [wholePages, paginationCount]
  );

  const handlePage = (e, page) => {
    const type = e.target.id;
    if (type === "prev") setPageNum((prevPage) => prevPage - 1);
    if (type === "next") setPageNum((prevPage) => prevPage + 1);
    if (type === "first") setPageNum(1);
    if (type === "end") setPageNum(wholePages);
    if (type === "pagination") setPageNum(page);
  };

  useEffect(() => {
    const currentPageMainLists = changeMainPage(pageNum);
    setPaginationBtns(currentPageMainLists);
  }, [changeMainPage, pageNum, wholePages]);

  const { FIRST, PREV, NEXT, END } = NAME;

  return (
    <PaginationWrapper>
      {wholePages !== 0 && (
        <>
          <OptionBtn id="first" onClick={handlePage} disabled={pageNum === 1}>
            {FIRST}
          </OptionBtn>
          <OptionBtn id="prev" onClick={handlePage} disabled={pageNum === 1}>
            {PREV}
          </OptionBtn>
        </>
      )}
      <AlignPages>
        {paginationBtns.map((page, idx) => (
          <PaginationBtn
            key={idx}
            id="pagination"
            page={page}
            pageNum={pageNum}
            onClick={(e) => handlePage(e, page)}>
            {page}
          </PaginationBtn>
        ))}
      </AlignPages>
      {wholePages !== 0 && (
        <>
          <OptionBtn id="next" onClick={handlePage} disabled={pageNum === wholePages}>
            {NEXT}
          </OptionBtn>
          <OptionBtn id="end" onClick={handlePage} disabled={pageNum === wholePages}>
            {END}
          </OptionBtn>
        </>
      )}
    </PaginationWrapper>
  );
}

const PaginationWrapper = styled.div`
  ${({ theme }) => theme.flexSet()};
  margin: 15px 0;
`;

const PaginationBtn = styled.button`
  ${({ theme }) => theme.flexSet()};
  width: 20px;
  height: 20px;
  border: 0.5px solid ${({ theme }) => theme.color.borderline};
  border-radius: 3px;
  margin-right: 5px;
  background-color: ${({ theme, page, pageNum = -1 }) =>
    page === pageNum ? theme.color.button : theme.color.White};
  color: ${({ theme, page, pageNum = -1 }) =>
    page === pageNum ? theme.color.White : theme.color.Black};

  cursor: pointer;
`;

const OptionBtn = styled(PaginationBtn)`
  width: 60px;
`;

const AlignPages = styled.div`
  ${({ theme }) => theme.flexSet()};
  margin: auto 20px;
`;
