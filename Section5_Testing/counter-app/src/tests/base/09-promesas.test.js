import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes.js";

describe('Tests in promises file', () => {
    test('should return a hero using async', ( done ) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero => {

                expect(hero).toBe(heroes[0]);
                done();
            });
    });
    
    test('should return an error if the hero does not exist', (done) => {
        const id =10;

        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe( 'No se pudo encontrar el héroe')
                done();
            })

    });
    
});
