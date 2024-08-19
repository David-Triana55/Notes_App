describe('note app', function () {
  this.beforeEach(() => {
    cy.visit('http://192.168.0.7:5173/')
    cy.request('POST', 'http://localhost:3008/api/testing/reset')

    const user = {
      name: 'Juan',
      username: 'juan',
      password: '12345'
    }

    cy.request('POST', 'http://localhost:3008/api/users/', user)
  })

  it('login form can be opened', () => {
    const buton = cy.get('.container-form--icon')
    buton.click()
    cy.contains('You need to login')
  })

  it('front page can be opened', () => {
    cy.contains('NOTES')
  })

  it('user write wrong credentials', () => {
    cy.get('[name="user"]').type('juan')
    cy.get('[name="password"]').type('123')
    cy.contains('Login').click()
    cy.get('.error-message').should('have.css', 'color', 'rgb(255, 0, 0)')
    cy.contains('Incorrect credentials')
  })

  it('User can login', () => {
    cy.get('[name="user"]').type('juan')
    cy.get('[name="password"]').type('12345')
    cy.contains('Login').click()
    cy.get('.open-modal').click()
    cy.contains('Create a new note')
    cy.get('[placeholder="Write your note..."]').type('estoy probando hacer un test')
    cy.get('.modal-form > button').click()
    cy.contains('estoy probando hacer un test')
  })

  describe('when logged in', () => {
    this.beforeEach(() => {
      cy.login({ username: 'juan', password: '12345' })
    })
    it('a new note can be created', () => {
      cy.get('.open-modal').click()
      cy.contains('Create a new note')
      cy.get('[placeholder="Write your note..."]').type('a note created by cypress')
      cy.get('.modal-form > button').click()
      cy.contains('a note created by cypress')
      cy.get('.note-button--icon--delete').click()
      cy.contains('No notes yet')
    })
  })
})
