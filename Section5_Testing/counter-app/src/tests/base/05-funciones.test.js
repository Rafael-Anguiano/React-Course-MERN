import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from '../../base/05-funciones'


describe('Testing functions', () => {
    test('getUser must return a object', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        // console.log(user)
        expect(user).toEqual(userTest)
    })

    // If there is not value in name
    test('getUser must return a object', () => {
        const name = 'Juan'
        const userTest = {
            uid: 'ABC567',
            username: name
        }

        const user = getUsuarioActivo(name);
        // console.log(user)
        expect(user).toEqual(userTest)
    })

})

