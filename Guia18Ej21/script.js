
let persona = {
    nombre: "Juan",
    edad: 18,
    sexo: "H",
    peso: 70,
    altura: 1.65
}

let array = [];

for(let dato in persona) {
    array.push(persona[dato]);
    }

console.log(array);