import PaginationLayout from "./components/PaginationLayout";
import YourComponent from "./components/YourComponent";
import { justEngAndCode as yourDataItems } from "./utils/mockData";

function App() {
  return (
    <div className="App">
      <PaginationLayout
        Component={YourComponent}
        itemsPerPage={5}
        paginationCount={10}
        yourDataItems={yourDataItems}
      />
    </div>
  );
}
export default App;
