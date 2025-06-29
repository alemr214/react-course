const persona  = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero de Software",
}

const useContext = (nombre, edad) => {
    return {
        nombreClave: nombre,
        anios: edad,
    }
}

const {nombreClave, anios} = useContext(persona)

console.log(nombreClave, anios); // { nombreClave: 'Juan', anios: 30 }