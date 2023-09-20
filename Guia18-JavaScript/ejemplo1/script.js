
function varPrueba() {
    var x = 31;
    if (true) {
    var x = 71; // Misma variable!
    console.log(x); // Imprime el valor 71
    }
    console.log(x); // Imprime el valor 71
    }
    function letPrueba() {
    let x = 31;
    if (true) {
    let x = 71; // variable diferente
    console.log(x); // Imprime el valor 71
    }
    console.log(x); // Imprime el valor 31
    }


    // Template string


    var nombre = 'Miguel Angel';
var apellidos = 'Alvarez'
var profesion = 'desarrollador';
var perfil = `<b>${nombre} ${apellidos}</b> es ${profesion}`;


    // If ternario

    momento = (hora_actual < 12) ? "Antes del mediodía" : "Después del mediodía";

    



/*var edad = prompt("Que edad tenes",29);
console.log("Hola desde el script nuevamente");*/


var numero = 123;

numero = "123";

console.log("El tipo de dato de numero es " + typeof numero);

var edad = 14;

var mensaje =`La edad del sujeto es
....
....
${edad}`;
console.log (mensaje);


var numeros = [1,2,3,4,5,6,7,8,9];

console.log(numeros);

var personas = [
    {
        nombre: "Pepe",
        apellido: "Suarez"
    }