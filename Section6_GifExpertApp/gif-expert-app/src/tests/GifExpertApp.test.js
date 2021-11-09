import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import GifExpertApp from '../GifExpertApp'

describe('Test in GifExpertApp component', () => {
    
    test('should ', () => {
        const wrapper = shallow(<GifExpertApp/>)
        expect(wrapper).toMatchSnapshot()
    })
    
    test('should show a list of categories', () => {
        const categories = ['HxH', 'Naruto']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length ).toBe(categories.length)
    })
    
    

})