describe('ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=todoscomponent--primary&args=todos;'));
  it('should render the component', () => {
    cy.get('myorg-todos').should('exist');
  });
});