import React from "react";
import PaginationLayout from "./lib/NYAM_PAGINATION";
import YourComponent from "./components/YourComponent";
import { justEngAndCode as yourDataItems } from "./utils/mockData";
export const ButtonTitle = {
  FIRST: `<< First`,
  PREV: `< Prev`,
  NEXT: `Next >`,
  END: `End  >>`,
};
export const ButtonColor = "#0000FF";

function App() {
  const func = () => 3;

  const str = 10;
  return (
    <PaginationLayout
      Component={YourComponent}
      itemsPerPage={5}
      paginationCount={10}
      wholeDataItems={yourDataItems}
      func={func}
      str={str}
    />
  );
}
export default App;
