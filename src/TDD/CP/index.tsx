import React from "react";
import ListItems from "./Components/ListItems";
import Contato from "./Components/Contato";

const App: React.FC = () => {
  const myArray = ["Item 1", "Item 2", "Item 3"];

  return (
    <>
      <h1>Hello, World!</h1>
      <ListItems myArray={myArray} />
      <Contato />
    </>
  );
};

export default App;
