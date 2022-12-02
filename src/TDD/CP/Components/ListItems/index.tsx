import React from "react";

interface Props {
  myArray: string[];
}

const ListItems: React.FC<Props> = ({ myArray }) => {
  return (
    <ul data-test="lista">
      {myArray.map((item: string) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default ListItems;
