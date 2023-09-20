const pi = Math.PI;


let radio = prompt("Ingrese el radio");

function area( pi, radio ) {
    let area = pi*radio**2
    return area;
}

function perimetro(pi, radio ) {

    let perimetro = 2*pi*radio;
    return perimetro;
}

console.log( area(pi, radio))
console.log( perimetro(pi, radio));