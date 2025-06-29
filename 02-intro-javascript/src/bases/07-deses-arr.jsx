const useState = ( valor ) => {
    return [ valor, (valor) => { console.log(`Hola ${valor}`)}]
}

const arr = useState("Goku");
const [nombre, setNombre] = arr;
console.log(nombre); // Goku
setNombre("Vegeta"); // Hola Vegeta