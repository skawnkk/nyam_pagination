import React from "react";
import styled from "styled-components";
function YourComponent({ dataToShow }) {
  return dataToShow.map((el, idx) => (
    <FlexBox key={idx}>
      <div>
        <ColorBox color={`#${el[1]}`}>
          <div>{el[0]}</div>
          <div>{`#${el[1]}`}</div>
        </ColorBox>
      </div>
    </FlexBox>
  ));
}

const FlexBox = styled.div`
  ${({ theme }) => theme.flexSet()};
`;
const ColorBox = styled.div`
  ${({ theme }) => theme.flexSet("space-between", "flex-start")};
  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.color.White};
  padding: 10px;
  width: 500px;
  height: 100px;
`;

export default YourComponent;
