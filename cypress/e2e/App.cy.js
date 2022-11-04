describe("BitBlog", () => {
  it("First load", () => {
    cy.visit("http://localhost:3000");
  });

  let initialLength = 0;
  it("Length storing", () => {
    cy.get(".blog-list")
      .find(".blog-preview")
      .then((array) => {
        const listingCount = Cypress.$(array).length;
        initialLength = listingCount;
      });
  });

  it("Clicking New Blog", () => {
    cy;
    cy.contains("New Blog").click();

    cy.url().should("include", "/create");
  });

  it("Clicked link should have class 'active'", () => {
    cy.get('[href="/create"]').should("have.class", "active");
  });

  it("Before typing'", () => {
    cy.get('[type="text"]').should("not.have.value");
    cy.get("textarea").should("not.have.value");
    cy.get("input:nth-of-type(2)").should("not.have.value");
  });

  const typingText = "Test";

  it("Typing on input 'Blog Title'", () => {
    cy.get('[type="text"]').type(typingText).should("have.value", typingText);
    cy.get("textarea").type(typingText).should("have.value", typingText);
    cy.get("input:nth-of-type(2)").type(typingText).should("have.value", typingText);
  });

  it("Hovering button on 'New Blog' page", () => {
    cy.get("button").trigger("mouseover").should("have.css", "transform");
  });

  it("Clicking button and adding new blog", () => {
    cy.get("button")
      .click()
      .then(() => {
        cy.get('[href="/"]').click();
      });
  });

  let lenghtListLengthAfterAdding = 0;
  it("Initial length should be increased by 1", () => {
    cy.get(".blog-list")
      .find(".blog-preview")
      .then((listing) => {
        const listingCount = Cypress.$(listing).length;
        expect(listing).to.have.length(initialLength + 1);
        lenghtListLengthAfterAdding = initialLength + 1;
      });
  });

  it("Clicking on the last Blog item", () => {
    cy.get(`.blog-list > :nth-child(${initialLength + 2})`).click();
  });

  it("Should show typed text", () => {
    cy.get("h2").contains(typingText);
  });

  it("Deleting a blog", () => {
    cy.get(".blog-delete").click();
    cy.url().should("not.include", "/create");
  });

  it("Checking length after deleting", () => {
    expect(initialLength).to.equal(initialLength);
  });
});
