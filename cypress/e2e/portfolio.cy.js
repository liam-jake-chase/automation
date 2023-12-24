describe("template spec", { testIsolation: false }, () => {
  it("Opens the portfolio page", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
  });

  it("Clicks on the Find out about me button", () => {
    cy.contains("Find Out About Me").click();
  });

  it("Tests every button on the navbar", () => {
    cy.get('[data-cy="home-button"]').click();
    cy.get('[data-cy="about-button"]').click();
    cy.get('[data-cy="skills-button"]').click();
    cy.get('[data-cy="portfolio-button"]').click();
    cy.get('[data-cy="resume-button"]').click();
    cy.get('[data-cy="contact-button"]').click();
    cy.contains("Find Out About Me").click();
  });

  it("Validates the profile picture is showing", () => {
    cy.get('[data-cy="profile-picture"]').should("exist");
  });

  it("Validates that there are 4 website cards", () => {
    cy.get(".card").should("have.length", 4);
  });

  it("Ensures the buttons for Page and Code open the url correctly", () => {
    cy.get('[data-cy="card-button-page"]').invoke("removeAttr", "target").eq(0).click();
  });
});
