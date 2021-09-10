import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { ButtonTitle, ButtonColor } from "../App.js";
export default function PaginationLayout({
  Component,
  itemsPerPage,
  paginationCount,
  yourDataItems
}) {
  const [dataToShow, setDataToShow] = useState([]);
  const [wholePages, setWholePages] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const dividedPageItems = useCallback(data => {
    if (!data.length) return [];
    const pageItems = [];

    for (let i = 0; i < data.length; i += itemsPerPage) {
      const pageUsers = data.slice(i, i + itemsPerPage);
      pageItems.push(pageUsers);
    }

    return pageItems;
  }, [itemsPerPage]);
  useEffect(() => {
    const pagedItem = dividedPageItems(yourDataItems);
    setWholePages(pagedItem.length);
    setDataToShow(pagedItem[pageNum - 1] || []);
  }, [pageNum, dividedPageItems, yourDataItems]); //pagination

  const [paginationBtns, setPaginationBtns] = useState([]);
  const changeMainPage = useCallback(pageNum => {
    const totalPageLists = Array.from({
      length: wholePages
    }, (_, idx) => idx + 1);
    const remains = wholePages - pageNum;
    const half = paginationCount / 2;
    if (wholePages <= paginationCount) return totalPageLists.slice(0, wholePages);
    if (pageNum <= half) return totalPageLists.slice(0, paginationCount);
    return pageNum > half && remains <= half ? totalPageLists.slice(pageNum - paginationCount + remains, wholePages) : totalPageLists.slice(pageNum - half - 1, pageNum + half - 1);
  }, [wholePages, paginationCount]);

  const handlePage = (e, page) => {
    const type = e.target.id;
    if (type === "prev") setPageNum(prevPage => prevPage - 1);
    if (type === "next") setPageNum(prevPage => prevPage + 1);
    if (type === "first") setPageNum(1);
    if (type === "end") setPageNum(wholePages);
    if (type === "pagination") setPageNum(page);
  };

  useEffect(() => {
    const currentPageMainLists = changeMainPage(pageNum);
    setPaginationBtns(currentPageMainLists);
  }, [changeMainPage, pageNum, wholePages]);
  const {
    FIRST,
    PREV,
    NEXT,
    END
  } = ButtonTitle;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Component, {
    dataToShow: dataToShow
  }), /*#__PURE__*/React.createElement(PaginationWrapper, null, wholePages !== 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OptionBtn, {
    id: "first",
    onClick: handlePage,
    disabled: pageNum === 1
  }, FIRST), /*#__PURE__*/React.createElement(OptionBtn, {
    id: "prev",
    onClick: handlePage,
    disabled: pageNum === 1
  }, PREV)), /*#__PURE__*/React.createElement(AlignPages, null, paginationBtns.map((page, idx) => /*#__PURE__*/React.createElement(PaginationBtn, {
    key: idx,
    id: "pagination",
    page: page,
    pageNum: pageNum,
    onClick: e => handlePage(e, page),
    ButtonColor: ButtonColor
  }, page))), wholePages !== 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OptionBtn, {
    id: "next",
    onClick: handlePage,
    disabled: pageNum === wholePages
  }, NEXT), /*#__PURE__*/React.createElement(OptionBtn, {
    id: "end",
    onClick: handlePage,
    disabled: pageNum === wholePages
  }, END))));
}
const flexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PaginationWrapper = styled(flexDiv)`
  margin: 15px 0;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const PaginationBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  margin-right: 5px;
  cursor: pointer;
  border: 0.5px solid #b6afaf;
  background-color: ${({
  ButtonColor,
  page,
  pageNum = -1
}) => page === pageNum ? ButtonColor : "#ffffff"};
  color: ${({
  page,
  pageNum = -1
}) => page === pageNum ? "#ffffff" : "#333333"};
`;
const OptionBtn = styled(PaginationBtn)`
  width: 60px;
`;
const AlignPages = styled(flexDiv)`
  margin: auto 20px;
`;