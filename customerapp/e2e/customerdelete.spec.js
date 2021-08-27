describe("delete a customer", () => {
    it('delete', () => {
        // open default browser and in addressbar : http://localhost:3000
        cy.visit("http://localhost:3000");
        cy.get('button')
        .first()
        .click()
        .get(".row").then(rows => {
            expect(rows.length).to.eq(5);
        });
      })
});