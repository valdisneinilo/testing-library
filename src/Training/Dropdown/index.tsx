/*
  1 - o dropdown deve ter estado inicialmente fechado
  2 - ao clicar no botão, o dropdown deve ser aberto/fechado e exibir/ocultar as opções, e o texto do botão deve ser alterado 
  3 - ao clicar no item do menu, o dropdown deve ser escondido e o item clicado deve ser exibido na tela
*/

import { useState } from "react";

interface DropdownProps {
  options: string[];
  setOption: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Dropdown: React.FC<DropdownProps> = ({ setOption, options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [textButton, setTextButton] = useState<string>("Exibir");

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setTextButton(isOpen ? "Exibir" : "Ocultar");
  };

  const handleOption = (option: string) => {
    setOption(option);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>{textButton} menu</button>

      {isOpen && (
        <ul role={"menu"}>
          {options.map((option: string) => {
            return (
              <li
                key={option}
                onClick={() => handleOption(option)}
                role={"menuitem"}
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Dropdown;
