// Variables

const nombre = "Alejandro";
const apellido = "Martinez";

let edad = 30;

// Scope

if (true) {
  let edad = 25;
  console.log(edad); // 25
}

console.log(edad); // 30
