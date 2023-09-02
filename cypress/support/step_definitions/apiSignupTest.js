import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {faker} from '@faker-js/faker';

//Escenario 1, Crear un nuevo usuario
Given('Al hacer una peticion POST a la url {string} con usuario nuevo:', (urlsignup) => {
    const randomUsername = faker.internet.userName(); // Genera un nombre de usuario aleatorio
    cy.log(randomUsername);
    cy.request({
        method: 'POST',
        url: urlsignup,
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            username: randomUsername,
            password: btoa(unescape(encodeURIComponent("2020")))
        }
    }).as('apiResponseSignup');
});

When('cuando el usuario es nuevo el response code es {int}', (statusCode) => {
    cy.get('@apiResponseSignup').should((response) => {
        expect(response.status).to.equal(statusCode);
    });
});

Then('el cuerpo de la respuesta debe ser vacía', () => {
    cy.get('@apiResponseSignup').should((response) => {
        expect(response.body).to.empty;
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

