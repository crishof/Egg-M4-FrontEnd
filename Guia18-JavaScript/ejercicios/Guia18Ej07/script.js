

const limite = 50;
var suma = 0;

do{
    var numero = Number(prompt("Ingrese un numero"));
    suma += numero;
    alert("El total acumulado la suma es: " + suma);

}while(suma <= limite);
