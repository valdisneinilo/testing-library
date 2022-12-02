import { render, screen, userEvent, waitFor } from "../../Utils";
import JestApp from "./index";

describe("Curso TDD", () => {
  beforeEach(() => {}); // serve para executar algo antes de cada teste, exemplo atribuir um valor a uma variável, ou renderizar um componente

  it("To Be - toBe()", () => {
    // toBe() compara se o valor é igual ao esperado, nesse caso se o valor é igual ao que foi passado no expect
    expect(1).toBe(1);
    expect("teste").toBe("teste");
    expect(true).toBe(true);
  });

  it("To Equal - toEqual()", () => {
    // toEqual() compara se o valor é igual ao esperado, nesse caso se o valor é igual ao que foi passado no expect
    //independe do tipo de dado que está sendo comparado, ele compara o elemento
    const array = [1, 2, 3];
    expect(1).toEqual(1); // dois numeros iguais
    expect("teste").toEqual("teste"); // duas strings iguais
    expect(true).toEqual(true); // dois booleanos iguais
    expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 }); // dois objetos iguais
    expect(array).toEqual([1, 2, 3]); // duas arrays iguais (mesmos valores so que sendo um armazenado em uma variável e o outro não)
  });

  it("To Match - toMatch()", () => {
    // aceita expressões regulares
    expect("teste").toMatch(/\w+/); // \w+ é uma expressão regular que significa uma palavra, ou seja, qualquer caracter que não seja espaço
    expect("(21)99123-5678").toMatch(/^\(\d{2}\)\d{5}-\d{4}/); // expressão regular para validar um telefone
  });

  it("Operadores ternário", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3); // verifica se o valor é maior que o esperado
    expect(value).toBeGreaterThanOrEqual(3.5); // verifica se o valor é maior ou igual ao esperado
    expect(value).toBeLessThan(5); // verifica se o valor é menor que o esperado
    expect(value).toBeLessThanOrEqual(4.5); // verifica se o valor é menor ou igual ao esperado
  });

  it("To Contain - toContain() e toContainEqual()", () => {
    // toContain() verifica se o valor está contido no array, ou seja, se o valor está dentro do array
    const myArray = [9, 85, 13];
    expect(myArray).toContain(85); // verifica se o array contém o valor passado
    expect([7, 85, 13]).toContainEqual(myArray[2]); // verifica se o array contém o valor passado, independente do tipo de dado, nesse caso estou verificando se no array passado no expect contem um valor igual ao da posição "2" da variável myArray
  });

  it("Null  e Undefined - toBeNull() e toBeUndefined()", () => {
    // toBeNull corresponde a apenas null
    // toBeUndefined corresponde a apenas undefined
    // toBeDefined é o oposto de toBeUndefined

    // toBeNull() verifica se o valor é null
    // toBeUndefined() verifica se o valor é undefined
    const n = null;
    const u = undefined;
    expect(n).toBeNull(); // verifica se o valor é null
    expect(u).toBeUndefined(); // verifica se o valor é undefined
    expect(n).toBeDefined(); // verifica se o valor é definido
    expect(u).not.toBeDefined(); // verifica se o valor não é definido

    // toBeDefined() verifica se o valor é definido, da para usar para saber se uma propriedade existe dentro de um objeto  por exemplo

    const obj = { a: 1, b: 2 };
    expect(obj.a).toBeDefined(); // verifica se a propriedade "a" existe dentro do objeto
    // expect(obj.c).not.toBeDefined(); // verifica se a propriedade "c" não existe dentro do objeto
  });

  it("truthy e falsy - toBeTruthy() e toBeFalsy()", () => {
    // toBeTruthy() verifica se o valor é truthy
    // toBeFalsy() verifica se o valor é falsy
    const t = true;
    const f = false;
    expect(t).toBeTruthy(); // verifica se o valor é truthy
    expect(f).toBeFalsy(); // verifica se o valor é falsy
  });

  it("Mock", () => {
    // mock é uma função que simula uma função real, ela é usada para testar funções que dependem de outras funções, por exemplo, uma função que faz uma requisição para uma api, para testar essa função é necessário mockar a função que faz a requisição para a api, para que a função que faz a requisição não seja chamada, e sim a função mockada, assim a função que faz a requisição não é chamada e o teste não falha, pois a função mockada não faz a requisição para a api, ela apenas simula a requisição, e retorna um valor que pode ser usado para testar a função que faz a requisição para a api

    const mock = jest.fn(); // cria uma função mockada
    mock.mockReturnValue("teste"); // define o valor que a função mockada vai retornar
    expect(mock()).toBe("teste"); // chama a função mockada e verifica se o valor retornado é igual ao esperado
    expect(mock).toHaveBeenCalled(); // verifica se a função mockada foi chamada
    expect(mock).toHaveBeenCalledTimes(1); // verifica se a função mockada foi chamada uma vez
  });

  it("Mock com parâmetros", () => {
    const mock = jest.fn();
    mock("teste");
    expect(mock).toHaveBeenCalledWith("teste"); // verifica se a função mockada foi chamada com os parametros passados
  });

  it("Mock implementation", () => {
    const newMock = jest
      .fn()
      .mockImplementation((a: number, b: number): number => a * b); // cria uma função mockada e define a implementação dela
    expect(newMock(6, 6)).toBe(36); // chama a função mockada e verifica se o valor retornado é igual ao esperado
  });
});

describe("jestApp", () => {
  it("Should render JestApp", () => {
    render(<JestApp />);
    expect(screen.getByText("Jest App")).toBeInTheDocument();
  });
});
