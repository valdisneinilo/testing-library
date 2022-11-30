import React from "react";

function App() {
  const [input, setInput] = React.useState("");
  const [myarray, setMyarray] = React.useState(["teste", "teste2", "teste3"]);
  function handleClick() {
    setMyarray([...myarray, "new teste"]);
  }
  function handleClick2() {
    setTimeout(() => {
      setMyarray([...myarray, "new teste2"]);
    }, 800);
  }
  function handleRemoveItem() {
    setTimeout(() => {
      setMyarray(myarray.filter((item) => item !== "teste"));
    }, 800);
  }
  return (
    <>
      <div>
        <input
          placeholder="new input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <ul>
          {myarray.map((item: string) => (
            <li key={item}>
              <span>{item}</span>
              <button onClick={handleRemoveItem}>remove</button>
            </li>
          ))}
        </ul>

        <button onClick={handleClick}>check</button>
        <button onClick={handleClick2}>check2</button>
      </div>

      <div>
        <button onClick={handleRemoveItem}>click</button>
      </div>
    </>
  );
}

export default App;
