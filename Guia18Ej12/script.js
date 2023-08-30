


getDataType = argumento => {

    return typeof argumento;
}

const arg1 = 55;
const arg2 = "hola";
const arg3 = { nombre: "Juan", dni: 44234255};
const arg4 = [5, 5, 5];


console.log(getDataType(arg1));
console.log(getDataType(arg2));
console.log(getDataType(arg3));
console.log(getDataType(arg4));