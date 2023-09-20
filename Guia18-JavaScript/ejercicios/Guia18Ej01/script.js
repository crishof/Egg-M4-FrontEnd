// let clima = prompt("Como está el dia de hoy?")

// alert(`El dia de hoy está ${clima}`);


function getFormValores() {
    let clima = document.getElementById("clima").value;

    console.log(clima);

    document.getElementById('respuestaClima').innerHTML = "El día de hoy está : " + clima;
}
document.getElementById('form1').addEventListener('submit',function(event){
    event.preventDefault();
    getFormValores();
});
