

// 20. Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
// muestre el siguiente array [6, 9, 12, 15, 18].


let matriz = [[3], [6], [9], [12], [15]];

console.log(matriz);

let array = [];

for(let i = 0; i < matriz.length; i++){

    (i < matriz.length -1)?
    array.push(matriz[i][0] + 3):
    array.push(matriz[i][0] + 3);    
}

console.log(array);