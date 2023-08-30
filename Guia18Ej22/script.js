

function mostrarConEspacios(frase) {
    var letrasConEspacios = frase.split('').join(' ');
    return letrasConEspacios;
}

var fraseInput = prompt("Ingrese una frase:");
var resultado = mostrarConEspacios(fraseInput);
console.log("Frase con espacios entre letras:", resultado);