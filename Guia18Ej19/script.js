


// Realizar un programa en Java donde se creen dos arreglos:
// el primero será un arreglo A de 50 números reales

let array1 = new Array(50);

// el segundo B, un arreglo de 20 números, también reales.

let array2 = new Array(20);

// Elprograma deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.

    for (let i = 0; i < array1.length; i++){
        array1[i] = Math.floor(Math.random() * 100);
    }

    // Luego, el arreglo A se debe ordenar de menor a mayor 
    
    function compare(a, b) {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }
    array1.sort(compare);
    
// copiar los primeros 10 números ordenados al arreglo B de 20 elementos,

    array2 = array1.slice(0,10)

    // rellenar los 10 últimos elementos con el valor 0.5.
    
    // array2.splice(11,20);

    for(i = 10; i< 20; i++){

        array2[i] = 0.5;
    }
    
// Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado de 20.
    

console.log("Array 1: " + array1.length);
console.log("Array 2: " + array2.length);
console.log(array1);
console.log(array2);
