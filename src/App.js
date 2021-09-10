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
  return (
    <PaginationLayout
      Component={YourComponent}
      itemsPerPage={5}
      paginationCount={10}
      wholeDataItems={yourDataItems}
    />
  );
}
export default App;
