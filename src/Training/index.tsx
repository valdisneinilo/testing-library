import React, { useState } from "react";
import Dropdown from "./Dropdown";

const Training: React.FC = () => {
  const [option, setOption] = useState<string>();
  return (
    <div>
      <h1>{option}</h1>
      <Dropdown
        options={["teste 01", "teste 02", "teste 03"]}
        setOption={setOption}
      />
    </div>
  );
};

export default Training;
