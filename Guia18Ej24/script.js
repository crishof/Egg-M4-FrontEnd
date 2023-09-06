

// Función para calcular el radio del círculo
function calcularRadio() {
    // Obtén el valor del diámetro del formulario
    var diametro = parseFloat(document.getElementById("diametro").value);

    // Calcula el radio (radio = diámetro / 2)
    var radio = diametro / 2;

    // Muestra el resultado en el elemento HTML
    document.getElementById("resultado").innerHTML = "El radio del círculo es: " + radio;
}

// Agrega un evento al formulario para llamar a la función cuando se envía
document.getElementById("circuloForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    calcularRadio(); // Llama a la función para calcular el radio
});