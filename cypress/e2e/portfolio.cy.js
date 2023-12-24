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

  it("Ensures the buttons for Page and Code have the correct url", () => {
    cy.get('[data-cy="card-button-page"]')
      .eq(0)
      .should("have.attr", "href")
      .and("include", "/flowersbybees");
    cy.get('[data-cy="card-button-code"]')
      .eq(0)
      .should("have.attr", "href")
      .and("include", "liam-jake-chase/flowersbybees");

    cy.get('[data-cy="card-button-page"]')
      .eq(1)
      .should("have.attr", "href")
      .and("include", "/muews");
    cy.get('[data-cy="card-button-code"]')
      .eq(1)
      .should("have.attr", "href")
      .and("include", "liam-jake-chase/muews");

    cy.get('[data-cy="card-button-page"]')
      .eq(2)
      .should("have.attr", "href")
      .and("include", "vancouverislandbarberco.ca");
    cy.get('[data-cy="card-button-code"]')
      .eq(2)
      .should("have.attr", "href")
      .and("include", "liam-jake-chase/vibc");

    cy.get('[data-cy="card-button-page"]')
      .eq(3)
      .should("have.attr", "href")
      .and("include", "/Bandsite");
    cy.get('[data-cy="card-button-code"]')
      .eq(3)
      .should("have.attr", "href")
      .and("include", "liam-jake-chase/Bandsite");
  });

  it("Validates the resume is visible", () => {
    cy.get('[src="./assets/LiamJChaseResumeWebQATS-1.png"]').should("exist");
    cy.get('[src="./assets/LiamJChaseResumeWebQATS-2.png"]').should("exist");
  });

  it("Validate that email link exists and goes to correct address", () => {
    cy.get('[data-cy="email-link"]')
      .should("have.attr", "href")
      .and("includes", "liam.jake.chase@gmail.com");
  });
});
