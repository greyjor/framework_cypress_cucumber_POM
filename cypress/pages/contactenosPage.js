class contactenosPage{

    elements = {
        quienessomosOpcion: () => cy.get('[href="/quienes-somos"]')
    }

    clickOpcionMenu(){
        this.elements.quienessomosOpcion().click()
    }
}

module.exports = new contactenosPage();