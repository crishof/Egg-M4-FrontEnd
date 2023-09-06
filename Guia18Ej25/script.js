

function getFormValores(){
    let nombre = document.getElementsByName('nombre')[0].value;
    let apellido = document.getElementsByName('apellido');

    console.log(nombre);

    document.getElementById('resultado').innerHTML = "El nombre ingresado es: " + nombre + " " + apellido[0].value
}

document.getElementById('form1').addEventListener('submit',function(event){
    event.preventDefault();
    getFormValores();
});