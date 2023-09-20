
var num = Number(prompt("Ingrese un numero"));

var max = num;
var min = num;
var suma = 0;
var promedio;
var count = 0;

do{

    if (num > max){
        max = num;}
    if (num < min){
        min = num;}
    suma += num;
    count++;
    num = Number(prompt("Ingrese un numero"));
}while(num !== 0);

alert("Mayor: " + max + " Menor: " + min + " Promedio: " + suma/count)