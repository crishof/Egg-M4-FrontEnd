

const texto = "Guia de JavaScript";

const buscarPalabra = argumento1 => {
    
    const palabras = argumento1.split(" ");
    let palabraLarga = "";

    for (let palabraIndice of palabras) {

        if(palabraIndice.length > palabraLarga.length) {

            palabraLarga = palabraIndice;
        }
    }

    return palabraLarga;

}

const palabraLarga = buscarPalabra(texto);

console.log(palabraLarga);