import { getHeroeById, getHeroeByOwner } from "./bases/08-imp-exp";

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            heroe
                ? resolve(heroe)
                : reject(`No se pudo encontrar el héroe con el ID ${id}`);
        }, 2000);
    });
};

getHeroeByIdAsync(2).then(console.log).catch(console.warn);
