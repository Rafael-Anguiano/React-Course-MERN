import  heroes, {owners} from '../data/heroes'

export const getHeroById = (id) => {
    return heroes.find((hero) =>  hero.id === id);
}

// console.log(getHeroById(1))

export const getHeroesByOwner = (Owner) => {
    return heroes.filter((hero) =>  hero.owner === Owner);
}

// console.log(getHeroesByOwner('DC'))