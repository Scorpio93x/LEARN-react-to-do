describe("My test", () => {
  it(`Doesn't do a thing`, () => {
    expect(true).to.equal(true);
  });
  it(`Visit my TODO app`, () => {
    cy.visit("http://localhost:3000/");
    cy.get(".counter").should("include.text", "0");
    cy.contains("+").click();
    cy.get(".counter").should("include.text", "1");
    cy.contains("-").click();
    cy.get(".counter").should("include.text", "0");
    cy.contains("+").click();
    cy.contains("+").click();
    cy.get(".counter").should("include.text", "2");
    cy.contains("Reset").click();
    cy.get(".counter").should("include.text", "0");
  });
});
