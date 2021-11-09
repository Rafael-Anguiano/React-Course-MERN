import React from 'react'
import GifGrid from '../../components/GifGrid';
import { shallow } from "enzyme"
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom'
jest.mock('../../hooks/useFetchGifs');

describe('Test in GifGrid Component', () => {
    const category ="HxH"
    // let wrapper;

    // beforeEach(()=>{
    //     jest.clearAllMocks();
    //     wrapper = shallow(<GifGrid category={category} />)
    // })

    test('should match with snapshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow( <GifGrid category={category} /> );
        expect(wrapper).toMatchSnapshot()
    })
    
    test('should show items when images are charge useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://testing/anything.jpg',
            title: 'Gif Title'
        }, {
            id: 'ABC',
            url: 'https://testing/anything.jpg',
            title: 'Gif Title'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        
        const wrapper = shallow(<GifGrid category={category} />);
        expect( wrapper.find('p').exists() ).toBe(false)
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length)
    })
    
})
