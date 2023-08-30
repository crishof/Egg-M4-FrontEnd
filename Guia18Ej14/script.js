
const libro = {
    
    isbn: "",
    titulo: "",
    autor: "",
    paginas: 0,

cargarLibro: function() {
    this.isbn = prompt("Ingrese isbn");
    this.titulo = prompt("Ingrese titulo");
    this.autor = prompt("Ingrese autor");
    this.paginas = Number(prompt("Ingrese cantidad de paginas"));
},

mostrarLibro: function(){
    console.log("isbn: " + this.isbn);
    console.log("titulo: " + this.titulo);
    console.log("autor: " + this.autor);
    console.log("paginas: " + this.paginas);
}
};

libro.cargarLibro();
libro.mostrarLibro();

console.log(libro);


