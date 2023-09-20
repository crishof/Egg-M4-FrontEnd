
function aleatorio(){
    return Math.floor(Math.random() * 100);
}

const largo = 10;
const vector1 = [];
const vector2 = [];

for (let i = 0; i < largo; i++){

    const generador = aleatorio();

    vector1.push(generador);
    vector2.push(generador);
}

console.log(vector1);
console.log(vector2);