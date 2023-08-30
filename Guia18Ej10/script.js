const palabra  = "palabra Original";

let reverseWord = (palabra) => { 
    return palabra.split('').reverse().join('');
    };

    let palabra2 = reverseWord(palabra);
console.log(palabra2);


console.log(palabra.split('').reverse().join(''));