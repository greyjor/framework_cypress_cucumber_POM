import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('la pagina web para hacer una compra', () => {
  cy.viewport(1600, 1200);
  cy.visit('https://www.demoblaze.com');
})

When("se adiciona productos al carro de compra", () => {
  // Arreglo para registrar los índices seleccionados
  const selectedIndices = [];

  // Función para seleccionar un producto al azar y agregarlo al carrito
  function addRandomProductToCart() {
    cy.get('.card-title').then((products) => {
      if (products.length >= 1) {
        let randomIndex;
        do {
          // Genera un índice aleatorio dentro de los límites de la lista
          randomIndex = Math.floor(Math.random() * products.length);
        } while (selectedIndices.includes(randomIndex)); // Verifica si el índice ya se seleccionó

        // Registra el índice seleccionado
        selectedIndices.push(randomIndex);

        // Haz clic en el botón "Add to cart" del producto
        cy.log(products[randomIndex])
        cy.wait(2000);
        cy.wrap(products[randomIndex]).click();
        cy.get('.col-sm-12 > .btn').click();
        cy.get('.active > .nav-link').click();
        cy.wait(2000);

        // Verifica que el producto se haya agregado al carrito
        cy.on('window:alert', (str) => {
          expect(str).to.equal('Product added');
        });
      }
    });
  }

  // Agrega dos productos aleatorios al carrito
  for (let i = 0; i <= 1; i++) {
    addRandomProductToCart();
    cy.wait(2000);
  }
})

When('se accede al carro de compra', () => {
  cy.get('#cartur').click();
  cy.get('.col-lg-8 > h2').should('have.text', 'Products');
})

When('se ordena la compra de productos', () => {
  cy.get('.col-lg-1 > .btn').click();
})

When('se completa el formulario', () => {
  cy.get('#name').type("Yesleny Becerra");
  cy.get('#country').type("Ecuador");
  cy.get('#city').type("Quito");
  cy.get('#card').type("8758963214785");
  cy.get('#month').type("08");
  cy.get('#year').type("27");
})

When('se realiza la compra', () => {
  cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
})


Then("se finaliza la compra de los productos", () => {
  cy.get('.sweet-alert > h2').should('have.text', 'Thank you for your purchase!');
})