const ul = document.getElementById("lista");
const boton= document.getElementById("btn");

async function getAllCharacters(){
    let response = await fetch("http://rickandmortyapi.com/api/character");
    let {results} = await response.json();
    return results;
}

function agregar(nombre){
    let li = document.createElement("li");
    li.innerHTML = "nombre";
    ul.appendChild(li);
}

boton.onclick = async function () {

    let results = await getAllCharacters();

    results.forEach(e => {
        agregar(e.name);
    });
}