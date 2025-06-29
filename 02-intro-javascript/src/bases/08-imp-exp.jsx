import heroes, { owners } from "../data/heroes"

const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id);
}

// console.log(getHeroeById(2)); // { id: 2, name: 'Spiderman', owner: 'Marvel' }

const getHeroeByOwner = (owner) => {
    return heroes.filter( heroe => heroe.owner === owner);
}

// console.log(getHeroeByOwner('DC'));

export {
    getHeroeById,
    getHeroeByOwner
}