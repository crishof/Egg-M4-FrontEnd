var persona = {
  apellido: "apellido",
  nombre: "nombre",
  dni: 22123123,
  nacimiento: new Date("11-10-2015"),
  mascotas: [
    {
      apodo: "apodo",
      numero: 22123,
      nacimiento: new Date("01-02-2014"),
    },
    {
      apodo: "apodo",
      numero: 22123,
      nacimiento: new Date("01-02-2014"),
    },
  ],
};

var mascota = {
  apodo: "apodo",
  numero: 22123,
  nacimiento: new Date("01-02-2014"),
};

class Mascota{
    apodo;
    numero;

}

var m = new Mascota();
m.apodo = "apodo2";
m.numero = 2222;

console.log(m);
console.log(persona.apellido);
console.log(persona.mascotas[1].apodo);
