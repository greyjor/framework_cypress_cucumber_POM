Feature: Validar el flujo de compra de la pagina https://www.demoblaze.com/ 

   Validar la compra de productos en la pagina https://www.demoblaze.com/

Scenario: Comprar dos productos
Given la pagina web para hacer una compra
When se adiciona productos al carro de compra
And se accede al carro de compra
And se ordena la compra de productos
And se completa el formulario
And se realiza la compra
Then se finaliza la compra de los productos



