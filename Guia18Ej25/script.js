
console.log("Hola!");

function getFormValores(){
    let formulario = document.getElementById('form1');
    
    let nombre = formulario.elements['nombre'].value;

    let apellido = formulario.elements["apellido"].value;
    
    console.log(nombre,apellido);

        document.getElementById('resultado').innerHTML = "El nombre ingresado es: " + nombre + " " + apellido

    // return false;
            
    }

// function getFormValores(){
//     let nombre = document.getElementsByName('nombre')[0].value;
//     let apellido = document.getElementsByName('apellido');

//     console.log(nombre);

//     document.getElementById('resultado').innerHTML = "El nombre ingresado es: " + nombre + " " + apellido[0].value
//     return false;
// }

document.getElementById('form1').addEventListener('submit',function(event){
    event.preventDefault();
    // getFormValores();
});

// let forma= document.getElementById('form1');
// let nombre = forma.elements["nombre"].value;
// console.log(nombre);