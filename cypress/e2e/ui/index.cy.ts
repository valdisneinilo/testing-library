describe("UI", () => {
  it("should render the UI", () => {
    cy.visit("http://localhost:3000");
    cy.get("h1").should("contain", "Hello, World!");
  });

  it("Should render a list of items", () => {
    cy.visit("http://localhost:3000");
    cy.get("ul[data-test= lista]").should("contain", "Item 1");
    cy.get("ul[data-test= lista]").should("contain", "Item 2");
    cy.get("ul[data-test= lista]").should("contain", "Item 3");
  });
});
