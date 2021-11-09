import { getGifs } from "../../helpers/getGifs"


describe('Tests in the getGifs file', () => {

    test('should return 10 elements', async () => {
        const gifs = await getGifs('HunterXHunter')
        expect(gifs.length).toBe(10)
    })
    
    test('should return 10 elements', async () => {
        const gifs = await getGifs('')
        expect(gifs.length).toBe(0)
    })
    
})
