// const arreglo = new Array(100) // Crear un arreglo de 100 elementos vacios

const arreglo = []

arreglo.push(1)
arreglo.push(2)
arreglo.push(3)
arreglo.push(4)


const arreglo2 = [...arreglo, 5, 6, 7, 8, 9, 10] // Crear un arreglo a partir de otro

const arreglo3 = arreglo2.map( function (numero) {
    return numero * 2
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);