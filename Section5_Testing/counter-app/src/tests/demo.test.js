
describe('Tests in the demo.test.js file', () => {
    test('Must be equal both strings', () => {
        const message = 'Hello World'
    
        const message2 = `Hello World`
    
        expect(message2).toBe(message)
    
    })
})

