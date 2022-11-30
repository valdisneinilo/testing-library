import { render, screen, userEvent, waitFor } from "./Tests";
import App from "./App";

/*  describe("Nome que quer dar a familia ou componente", () => {
      it("Nome do teste", () => {
      teste
    }); */

// getByText => busca na tela pelo texo e retorna o elemento, caso não encontre retorna erro
// queryByText => busca na tela pelo texto e retorna o elemento, caso não encontre retorna null
// findByText => busca na tela pelo texto e retorna uma promise, caso não encontre retorna erro

describe("App componet", () => {
  beforeEach(() => {
    // roda antes de cada teste
    console.log("beforeEach");
  });

  it("renders App component whith text 'teste' 'teste2' and 'teste3'", () => {
    //render => renderiza o componente App nesse caso
    render(<App />);
    //expect => é o que esperamos que aconteça
    // getByText => é um método do testing-library que retorna o elemento que contém o texto passado como parâmetro
    // toBeInTheDocument => é um método do testing-library que verifica se o elemento existe na tela
    expect(screen.getByText("teste")).toBeInTheDocument();
    expect(screen.getByText("teste2")).toBeInTheDocument();
    expect(screen.getByText("teste3")).toBeInTheDocument();
    // no teste acima, estamos esperando que o texto "teste" esteja no documento, ou seja, que ele esteja renderizado na tela
  });

  it("should have name 'new teste'", () => {
    render(<App />);
    const newbutton = screen.getByText("check");
    userEvent.click(newbutton);
    // userEvent.click => é um método do user-event que simula um clique no elemento passado como parâmetro
    expect(screen.getByText("new teste")).toBeInTheDocument();
  });

  it("The input elemente should value 'new input'", () => {
    render(<App />);
    const newinput = screen.getByPlaceholderText("new input");
    userEvent.type(newinput, "new input"); // userEvent.type => é um método do user-event que simula a digitação no elemento passado como parâmetro
    expect(newinput).toHaveValue("new input"); // toHaveValue => é um método do testing-library que verifica se o elemento passado como parâmetro tem o valor passado como parâmetro
  });

  //para testar funções assíncronas, usamos o método waitFor
  // waitFor => é um método do testing-library que recebe uma função como parâmetro e espera que essa função retorne true
  //o limite é de 1000ms, se a função não retornar true nesse tempo, o teste falha
  //lembrando precisa ser async/ await
  it("My first test async", async () => {
    render(<App />);
    const newbutton = screen.getByText("check2");
    userEvent.click(newbutton);
    await waitFor(() => {
      // awaiFor => espera que a função passada como parâmetro retorne true
      expect(screen.getByText("new teste2")).toBeInTheDocument();
    });
  });

  it("Remove item", async () => {
    // getAllByText => é um método do testing-library que retorna um array com todos os elementos que contém o texto passado como parâmetro
    // queryByText => nesse caso é usado quando queremos verificar se o elemento não existe na tela, ou seja retorna null
    render(<App />);
    const removeButton = screen.getAllByText("remove");
    userEvent.click(removeButton[0]);
    await waitFor(() => {
      expect(screen.queryByText("teste")).not.toBeInTheDocument(); // not.toBeInTheDocument => é um método do testing-library que verifica se o elemento não existe na tela.
      // not =>  inverte o resultado, ou seja, nega o resultado
    });
  });

  it("Verify if ecxiste a role button with text click", () => {
    render(<App />);
    //getByRole => busca na tela pelo elemento e o retorna, caso não encontre retorna erro
    //no caso abaixo, estamos buscando todos os elementos com a role button e com o texto click
    const button = screen.getAllByRole("button", { name: /click/i });
    expect(button).toHaveLength(1);
  });

  it("verify if element 'teste' was removed", async () => {
    render(<App />);
    const removeButton = screen.getAllByRole("button", { name: /click/i });
    screen.getByText("teste");
    userEvent.click(removeButton[0]);
    await waitFor(() => {
      expect(screen.queryByText("teste")).toBeNull();
    });
  });
});
