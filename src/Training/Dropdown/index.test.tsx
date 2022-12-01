/*
  1 - o dropdown deve ter estado inicialmente fechado
  2 - ao clicar no botão, o dropdown deve ser aberto/fechado e exibir/ocultar as opções, e o texto do botão deve ser alterado 
  3 - ao clicar no item do menu, o dropdown deve ser escondido e o item clicado deve ser exibido na tela
*/
import Dropdown from ".";
import { render, screen, userEvent } from "../../Utils";

const optionsItems = ["teste 01", "teste 02", "teste 03"];
const setOption = jest.fn(); // mock function

describe("Dropdown", () => {
  it("Should render the button with the button text 'Exibir menu' initially", () => {
    render(<Dropdown options={optionsItems} setOption={setOption} />);
    const button = screen.getByRole("button", { name: /Exibir menu/i });
    expect(button).toBeInTheDocument();
  });

  it("dropdown should be closed initially", () => {
    render(<Dropdown options={optionsItems} setOption={setOption} />);

    const item0 = screen.queryByRole("menuitem", { name: optionsItems[0] });
    const item1 = screen.queryByRole("menuitem", { name: optionsItems[1] });
    const item2 = screen.queryByRole("menuitem", { name: optionsItems[2] });

    expect(item0).not.toBeInTheDocument();
    expect(item1).not.toBeInTheDocument();
    expect(item2).not.toBeInTheDocument();
  });

  it("should change the button text when opening/closing the dropdown", () => {
    render(<Dropdown options={optionsItems} setOption={setOption} />);
    const button = screen.getByRole("button", { name: /Exibir menu/i });
    userEvent.click(button);
    expect(button).toHaveTextContent(/Ocultar menu/i);
    userEvent.click(button);
    expect(button).toHaveTextContent(/Exibir menu/i);
  });

  it("should open/close dropdown when clicking on the button", () => {
    render(<Dropdown options={optionsItems} setOption={setOption} />);

    const item0 = screen.queryByRole("menuitem", { name: optionsItems[0] });
    const item1 = screen.queryByRole("menuitem", { name: optionsItems[1] });
    const item2 = screen.queryByRole("menuitem", { name: optionsItems[2] });
    expect(item0).not.toBeInTheDocument();
    expect(item1).not.toBeInTheDocument();
    expect(item2).not.toBeInTheDocument();

    const button = screen.getByRole("button", { name: /Exibir menu/i });
    userEvent.click(button);

    const getItem0 = screen.getByRole("menuitem", { name: optionsItems[0] });
    const getItem1 = screen.getByRole("menuitem", { name: optionsItems[1] });
    const getItem2 = screen.getByRole("menuitem", { name: optionsItems[2] });

    expect(getItem0).toBeInTheDocument();
    expect(getItem1).toBeInTheDocument();
    expect(getItem2).toBeInTheDocument();

    const buttonNewText = screen.getByRole("button", { name: /Ocultar menu/i });
    userEvent.click(buttonNewText);

    expect(item0).not.toBeInTheDocument();
    expect(item1).not.toBeInTheDocument();
    expect(item2).not.toBeInTheDocument();
  });

  it("should hide dropdown when clicking on an option and the option clicked should show on screen", () => {
    render(<Dropdown options={optionsItems} setOption={setOption} />);

    const button = screen.getByRole("button", { name: /Exibir menu/i });
    userEvent.click(button);

    const getItem0 = screen.getByRole("menuitem", { name: optionsItems[0] });
    const getItem1 = screen.getByRole("menuitem", { name: optionsItems[1] });
    const getItem2 = screen.getByRole("menuitem", { name: optionsItems[2] });

    expect(getItem0).toBeInTheDocument();
    expect(getItem1).toBeInTheDocument();
    expect(getItem2).toBeInTheDocument();

    userEvent.click(getItem0);

    expect(setOption).toHaveBeenCalledWith(optionsItems[0]); // mock function called with the correct argument, ou seja, verifica se a função de pegar o item esta sendo chamada com o argumento correto, o value do item clicado.

    expect(getItem0).not.toBeInTheDocument();
    expect(getItem1).not.toBeInTheDocument();
    expect(getItem2).not.toBeInTheDocument();
  });
});
