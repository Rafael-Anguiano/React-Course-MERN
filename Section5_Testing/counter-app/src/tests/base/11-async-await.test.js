import '@testing-library/jest-dom'
import { getImagen } from '../../base/11-async-await'

describe('Tests in file 11-async-await', () => {
    test('should return an url of an image', async () => {
        const url = await getImagen();
        // console.log(url);
        expect(url.includes('https://')).toBe(true)
    })
    
})
