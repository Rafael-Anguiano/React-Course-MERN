import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp"
import '@testing-library/jest-dom'
import heroes from "../../data/heroes";

describe('Test of the file 08-imp-exp', () => {
    test('getHeroeById should return a hero by ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        
        const heroData = heroes.find(h => h.id === id)

        expect(hero).toEqual(heroData)

    })
    
    test('getHeroeById should return undefined if hero doesnt exist', () => {
        const id = 10;
        const hero = getHeroeById(id);

        expect(hero).toBe(undefined)
    })
    
    test('getHeroeByOwner should return heroes of DC', () => {
        const owner = 'DC';
        const heroArr = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner)


        expect(heroArr).toEqual(heroesData)
    })

    test('getHeroeByOwner should return heroes of Marvel', () => {
        const owner = 'Marvel';
        const heroArr = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner === owner)


        expect(heroArr).toEqual(heroesData)
        expect(heroArr.length).toEqual(heroesData.length)
        expect(heroArr.length).toBe(2)
    })

    
})
