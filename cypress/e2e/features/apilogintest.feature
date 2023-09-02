Feature: Pruebas de API de la pagina https://www.demoblaze.com/ 

   Validar la compra de productos en la pagina https://www.demoblaze.com/

Scenario: Escenario 1, LogIn Usuario y Password CORRECTO   
    Given Al hacer una peticion POST a la url "https://api.demoblaze.com/login" con usuario correcto y password correcto:
      | username      | jmsuarez2005 |
      | password      | 123 |
    When cuando el usuario es correcto y el password es correcto el response code es 200
    Then el cuerpo de la respuesta debe contener property "Auth_token"

Scenario: Escenario 2, LogIn Usuario CORRECTO y Password INCORRECTO   
    Given Al hacer una petición POST a la url "https://api.demoblaze.com/login" con usuario correcto y password incorrecto:
      | username      | jmsuarez2005 |
      | password      | 1234 |
    When cuando el response code es 200
    Then el cuerpo de la respuesta debe tener la property "errorMessage" y valor "Wrong password."

Scenario: Escenario 3, LogIn Usuario INCORRECTO y Password CORRECTO   
    Given Al hacer una petición POST a la url "https://api.demoblaze.com/login" con usuario incorrecto y password correcto:
      | username      | jmsuarez2007 |
      | password      | 123 |
    When cuando el usuario es incorrecto y el password es correcto el response code es 200
    Then la respuesta de la petición debe tener la property "errorMessage" y valor "User does not exist."
