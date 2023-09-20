
  // Obtén el elemento del párrafo por su ID
  var parrafo = document.getElementById("pintado");
  
  // Separa el texto en palabras
  var palabras = parrafo.textContent.split(" ");
  
  // Recorre todas las palabras
  for (var i = 0; i < palabras.length; i++) {
    // Elimina cualquier puntuación alrededor de la palabra
    var palabra = palabras[i].replace(/[^a-zA-Z]+/g, "");
    
    // Si la palabra tiene más de 8 letras, resáltala
    if (palabra.length > 8) {
      palabras[i] = '<span style="background-color: yellow;">' + palabras[i] + '</span>';
    }
  }
  
  // Une las palabras nuevamente en el párrafo
  parrafo.innerHTML = palabras.join(" ");
