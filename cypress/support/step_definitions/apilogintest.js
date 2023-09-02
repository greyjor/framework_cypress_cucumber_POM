import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

//Escenario 1, LogIn Usuario y Password CORRECTO  
Given('Al hacer una peticion POST a la url {string} con usuario correcto y password correcto:', (urlLogin) => {
  cy.request({
    method: 'POST',
    url: urlLogin,
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      username: "jmsuarez2005",
      password: btoa(unescape(encodeURIComponent("123")))
    }
  }).as('apiResponseLogin');
});

When('cuando el usuario es correcto y el password es correcto el response code es {int}', (statusCode) => {
  cy.get('@apiResponseLogin').should((response) => {
    expect(response.status).to.equal(statusCode);
  });
});

Then('el cuerpo de la respuesta debe contener property {string}', (property) => {
  cy.get('@apiResponseLogin').should((response) => {
    expect(JSON.stringify(response.body)).to.include(property);
  });
});

//Escenario 2, LogIn Usuario CORRECTO y Password INCORRECTO   
Given('Al hacer una petición POST a la url {string} con usuario correcto y password incorrecto:', (urlLogin) => {
  cy.request({
    method: 'POST',
    url: urlLogin,
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      username: "jmsuarez2005",
      password: btoa(unescape(encodeURIComponent("1234")))
    }
  }).as('apiResponseLogin');
});

When('cuando el response code es {int}', (statusCode) => {
  cy.get('@apiResponseLogin').should((response) => {
    expect(response.status).to.equal(statusCode);
  });
});

Then('el cuerpo de la respuesta debe tener la property {string} y valor {string}', (property, value) => {
  cy.get('@apiResponseLogin').should((response) => {
    expect(response.body).to.have.property(property, value);
  });
});

//Escenario 3, LogIn Usuario INCORRECTO y Password CORRECTO   
Given('Al hacer una petición POST a la url {string} con usuario incorrecto y password correcto:', (urlLogin) => {
  cy.request({
    method: 'POST',
    url: urlLogin,
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      username: "jmsuarez2007",
      password: btoa(unescape(encodeURIComponent("123")))
    }
  }).as('apiResponseLogin');
});

When('cuando el usuario es incorrecto y el password es correcto el response code es {int}', (statusCode) => {
  cy.get('@apiResponseLogin').should((response) => {
    expect(response.status).to.equal(statusCode);
  });
});

Then('la respuesta de la petición debe tener la property {string} y valor {string}', (property, value) => {
  cy.get('@apiResponseLogin').should((response) => {
    expect(response.body).to.have.property(property, value);
  });
});

