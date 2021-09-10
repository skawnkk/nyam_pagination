## Introduce

This is Pagination UI.  
It calculates item counts and shows the content of the page.  
It works smooth like a butter🥞  
(details👉: https://www.npmjs.com/package/nyam-pagination)

![](https://images.velog.io/images/skawnkk/post/d9ef019b-0c95-4864-8ae6-a32224b02773/React-App.gif)

## Installation

Copy & paste the following to your CLI:

```
npm i nyam-pagination
```

## Usage

**1. import PaginationLayout from "nyam-pagination"**  
**2. import your Component to render**  
**3. write props**
|prop|type|description|ex|
|:--|:--|:--|:--|
|Component| |Component to render with pagination | const Component = (`{dataToShow}`)=> {... |
|yourDataItems|any[ ] |whole Datas to render to your Component | |
|itemsPerPage|number| item counts per one page | 5=> Component will show 5 items |
|paginationCount|number| pagination range | 10=> 10 or less pagination button |

**4. custom as your style**

- ButtonTitle
- ButtonColor

5. deliver data, function etc...needed in yourComponent as `props`

## example 1

```js
import PaginationLayout from "nyam-pagination"; // 1
import YourComponent from "./components/YourComponent"; // 2
import yourDataItems from "./utils/sampleData";

function App() {
  //can edit ButtonTittle
  const ButtonTitle = {
    FIRST: `<< First`,
    PREV: `< Prev`,
    NEXT: `Next >`,
    END: `End  >>`,
  };

  //can edit ButtonColor
  const ButtonColor = "#0000FF";

  return (
    <PaginationLayout
      Component={YourComponent} //3
      itemsPerPage={5}
      paginationCount={10}
      wholeDataItems={yourDataItems}
      ButtonTitle={ButtonTitle}
      ButtonColor={ButtonColor}
    />
  );
}

export default App;

//YourComponent.js
function YourComponent({dataToShow, props}){
 return dataToShow.map(data=><div>{data}</div>)
  ...
}
export default YourComponent;
```

## example 2 : When passing a value as a prop

```js
//App.js
function App() {
  return (
    <PaginationLayout
      Component={YourComponent} //3
      itemsPerPage={5}
      paginationCount={10}
      wholeDataItems={yourDataItems}
      ButtonTitle={ButtonTitle}
      ButtonColor={ButtonColor}
      sampleData={sampleData} //optional
      sampleFunc={sampleFunc} //optional
    />
  );
}
export default App;

//YourComponent.js
function YourComponent({dataToShow, props}){

  const sampleData = props?.sampleData
  const sampleFunc = props?.sampleFunc
  sampleFunc()
  ...
}
export default YourComponent;
```
