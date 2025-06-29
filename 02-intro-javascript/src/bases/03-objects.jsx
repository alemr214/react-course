const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
};

const persona2 = { ...persona };

persona2.nombre = "Peter";
console.log(persona);
console.log(persona2);
