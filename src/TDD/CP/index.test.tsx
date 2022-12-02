import { render, screen, waitFor } from "../../Utils";
import Contato from "./Components/Contato";

describe("Contato", () => {
  it("should render Contato", () => {
    render(<Contato />);
    expect(screen.getByText("Contato")).toBeInTheDocument();
  });

  it("Should have a list wihv 'nome', 'telefone' e 'email'", async () => {
    render(<Contato />);

    await waitFor(() => {
      expect(
        screen.getByText("João - 123456789 - joao@email.com")
      ).toBeInTheDocument();
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(
        screen.getByText("Maria - 987654321 - maria@email.com")
      ).toBeInTheDocument();
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(
        screen.getByText("José - 123987456 - jose@email.com")
      ).toBeInTheDocument();
    });
  });
});
