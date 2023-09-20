

const radio = 20;

calcPerimetro = radio => {
    return 2 * Math.PI * radio;
}

calcArea = radio => {
    return Math.PI * radio**2;
}

console.log(calcArea(radio));
console.log(calcPerimetro(radio));