import '@testing-library/jest-dom'

import {getSaludo} from '../../base/02-template-string'


describe('Testing Template Strings', () => {
    test('getSaludo must return <Hola (name)>', () => {
        const name = 'Rafael'
        const greet = getSaludo(name);
        // console.log(greet)
        expect(greet).toBe('Hola ' + name)
    })

    // If there is not value in name
    test('getSaludo default <Hola (name)>', () => {
        const greet = getSaludo();
        // console.log(greet)
        expect(greet).toBe('Hola Carlos')
    })

})

