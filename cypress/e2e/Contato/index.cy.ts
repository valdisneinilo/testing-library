describe("Contato", () => {
  it("should render the Contato page", () => {
    cy.visit("http://localhost:3000/contato");
    cy.get("h1").should("contain", "Contato");
  });
});
