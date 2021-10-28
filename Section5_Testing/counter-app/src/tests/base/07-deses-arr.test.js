import { retornaArreglo } from "../../base/07-deses-arr";

describe('Testing in 07-deses-arr file', () => {
    test('retornaArreglo should return an array', () => {
        const arr = ['ABC', 123];
        const [letters, numbers] =  retornaArreglo();

        expect(letters).toEqual('ABC')
        expect(typeof letters).toEqual('string')
        
        expect(numbers).toEqual(123)
        expect(typeof numbers).toEqual('number')
    })
    
})
