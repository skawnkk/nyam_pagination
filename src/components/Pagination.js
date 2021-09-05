import React, { useState, useEffect } from "react";
import styled from "styled-components";

//PAGE_SIZE:보여주고싶은 페이지버튼갯수
//wholePages:실제 전체 페이지수
//pageNum:현재보고있는 페이지 (시작:1페이지)

export default function Pagination({ PAGE_SIZE, wholePages, pageNum, setPageNum }) {
  const [paginationBtns, setPaginationBtns] = useState([]);
  const changeMainPage = (pageNum) => {
    const totalPageLists = Array.from({ length: wholePages }, (_, idx) => idx + 1);
    const remains = wholePages - pageNum;
    if (wholePages <= PAGE_SIZE) return totalPageLists.slice(0, wholePages);
    if (pageNum <= PAGE_SIZE / 2) return totalPageLists.slice(0, PAGE_SIZE);
    return pageNum > PAGE_SIZE / 2 && remains <= PAGE_SIZE / 2
      ? totalPageLists.slice(pageNum - PAGE_SIZE + remains, wholePages)
      : totalPageLists.slice(pageNum - PAGE_SIZE / 2, pageNum + PAGE_SIZE / 2);
  };

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
  }, [pageNum, wholePages]);

  return (
    <PaginationWrapper>
      {wholePages !== 0 && (
        <>
          <OptionBtn id="first" onClick={handlePage} disabled={!pageNum}>
            {`<< First`}
          </OptionBtn>
          <OptionBtn id="prev" onClick={handlePage} disabled={!pageNum}>
            {`< Prev`}
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
          <OptionBtn id="next" onClick={handlePage} disabled={pageNum === wholePages - 1}>
            Next {` >`}
          </OptionBtn>
          <OptionBtn id="end" onClick={handlePage} disabled={pageNum === wholePages - 1}>
            End {` >>`}
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
`;

const OptionBtn = styled(PaginationBtn)`
  width: 60px;
`;

const AlignPages = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
`;
