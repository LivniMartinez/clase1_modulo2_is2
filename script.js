let numero = "15";
let saludo = "hola mundo desde js";
let validacion = true;
let data = null;
const valorPi = 3.1416;

//ALCANCE (SCOPE)

alert (typeof validacion)
alert (Math.PI * numero)
alert (Math.min(2,3,-6,8))

if (true) {
    saludo = "hola mundo desde el if";
    numero = 10;

    alert (numero)
    alert (saludo)
    valorPI = 5;
}