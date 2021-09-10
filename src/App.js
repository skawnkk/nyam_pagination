import React from "react";
import PaginationLayout from "./lib/NYAM_PAGINATION";
import YourComponent from "./components/YourComponent";
import { justEngAndCode as yourDataItems } from "./utils/mockData";

function App() {
  const ButtonColor = "#0000FF";
  const ButtonTitle = {
    FIRST: `<< First`,
    PREV: `< Prev`,
    NEXT: `Next >`,
    END: `End  >>`,
  };

  return (
    <PaginationLayout
      Component={YourComponent}
      itemsPerPage={5}
      paginationCount={10}
      wholeDataItems={yourDataItems}
      ButtonTitle={ButtonTitle}
      ButtonColor={ButtonColor}
    />
  );
}
export default App;
