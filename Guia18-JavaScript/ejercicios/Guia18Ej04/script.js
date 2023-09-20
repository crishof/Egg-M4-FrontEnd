let letra = prompt("Ingrese S o N");

switch(letra.toUpperCase()){
    case "S":
    case "N":
        confirm("Correcto","");
        break;
    default:
        confirm("Incorrecto","");
}