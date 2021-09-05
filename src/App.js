import PaginationLayout from "./lib/NYAM_PAGINATION";
import YourComponent from "./components/YourComponent";
import { justEngAndCode as yourDataItems } from "./utils/mockData";

function App() {
  return (
    <PaginationLayout
      Component={YourComponent}
      itemsPerPage={5}
      paginationCount={10}
      yourDataItems={yourDataItems}
    />
  );
}
export default App;
