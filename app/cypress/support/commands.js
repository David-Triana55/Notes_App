Cypress.Commands.add('login', ({ username, password }) => {
  cy.request('POST', 'http://localhost:3008/api/login', {
    username, password
  }).then(({ body }) => {
    localStorage.setItem('loggedNoteAppUser', JSON.stringify(body))
    cy.visit('http://localhost:5174')
  })
})
/* los commands son comandos personalizados que puedes crear para encapsular secuencias de acciones o solicitudes que realizas frecuentemente en tus tests. Esto te permite reutilizar código y mantener tus tests más limpios y legibles. */
