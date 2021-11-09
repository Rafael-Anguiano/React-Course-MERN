import React from 'react';
import {shallow} from 'enzyme'
import GifGridItem from '../../components/GifGridItem';

describe('', () => {

    const title = 'title';
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('should show the component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should have a paragraph with the title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(title)
    })
    
    test('should have an image with alt and url of props', () => {
        const img = wrapper.find('img');
        // expect( img.props().src ).toBe(url)
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
    })

    test('should have animation animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect( className.includes('animate__fadeIn') ).toBe(true)
    })
})
