var num1 = Number(prompt("Ingrese el numero 1"));
var num2 = Number(prompt("Ingrese el numero 2"));

var opcion = prompt("Ingrese la operacion a realizar");

function suma(n1,n2){
    return n1 + n2;
}
function resta(n1,n2){
    return n1 - n2;
}
function multi(n1,n2){
    return n1 * n2;
}
function divi(n1,n2){
    return n1 / n2;
}

switch (opcion.toLowerCase()) {
  case "s":
    confirm("La suma es: " + suma(num1, num2));
    break;

  case "r":
    confirm("La resta es: " + resta(num1, num2));
    break;

  case "m":
    confirm("La multiplicacion es: " + multi(num1, num2));
    break;

  case "d":
    confirm("La division es: " + divi(num1, num2));
    break;
}
