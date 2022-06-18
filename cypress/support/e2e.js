import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(`There were some uncaught exceptions found on the page: ${err}`)
    return false
  })