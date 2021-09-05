import { css } from "styled-components";
export const theme = {
  color: {
    borderline: "#B6AFAF",
    button: "#AAC14F",
    buttonHover: "#657A18",
    Black: "#333333",
    White: "#FFFFFF",
  },
};

export const flexSet = (horizon, vertical, direction) => css`
  display: flex;
  justify-content: ${horizon || "center"};
  align-items: ${vertical || "center"};
  flex-direction: ${direction || "row"};
`;
