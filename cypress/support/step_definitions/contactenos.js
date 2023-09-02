import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import contactenosPage from '../../pages/contactenosPage'


Given('Visitar la pagina web contactenos', ()=>{
    cy.visit("https://darmasolutions.com/contactus")
}) 

When("Al dar clic en la opcion quienes somos", ()=>{
    contactenosPage.clickOpcionMenu();
    //cy.get('[href="/quienes-somos"]').click()
})

Then("Redirecciona a la pagina web Quienes Somos", ()=>{
    cy.url("https://darmasolutions.com/quienes-somos").should('eq', 'https://darmasolutions.com/quienes-somos')
})