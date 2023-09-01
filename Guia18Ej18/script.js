var valores = [true, 5, false, "hola", "adios", 2];

// a) Determinar cual de los dos elementos de texto es mayor

// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false

// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos

console.log(valores);

console.log(
    valores[3].length > valores[4].length
        ? `La palabra ${valores[3]} es más larga`
        : `La palabra ${valores[4]} es más larga`
);

console.log(
    valores[0] && valores[2]
        ? `El resultado es:  ${valores[0]}`
        : `El resultado es:  ${valores[2]}`
);

console.log(
    valores[0] != valores[2]
        ? `El resultado es:  ${valores[0]}`
        : `El resultado es:  ${valores[2]}`
);
console.log( "la suma es: " + (valores[1] + valores[5]));
console.log( "la resta es: " + (valores[1] - valores[5]));
console.log( "la multiplicacion es: " + (valores[1] * valores[5]));
console.log( "la division es: " + (valores[1] / valores[5]));
console.log( "El modulo es: " + (valores[1]%valores[5]));