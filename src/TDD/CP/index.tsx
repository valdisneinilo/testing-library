import React from "react";

const App: React.FC = () => {
  const myArray = ["Item 1", "Item 2", "Item 3"];
  return (
    <>
      <h1>Hello, World!</h1>
      <ul data-test="lista">
        {myArray.map((item: string) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
