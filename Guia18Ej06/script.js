let numero = parseFloat(prompt("Ingrese un numero"));

if (numero == 0) {
  alert("El numero no es par ni impar");
} else if (numero % 2 == 0) {
  alert("El numero es par");
} else {
  alert("El numero es impar");
}
