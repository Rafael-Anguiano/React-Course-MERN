import React from 'react'
import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory"
import '@testing-library/jest-dom'


describe('Tests in file AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper;
    
    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />)
    })

    test('should match with snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
    test('should change textbox', () => {
        const input = wrapper.find('input');
        const value = 'Hello World'

        input.simulate('change', { target: {value} } );

    })

    test('should not post information on submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}} )
        expect(setCategories).not.toHaveBeenCalled()
    })
    
    test('should call setCategories and clear textInput', () => {
        // 1. Simulate Input Change
        const input = wrapper.find('input');
        const value = 'Hello World'
        input.simulate('change', { target: {value} } );
        
        // 2. Simulate Form submit
        wrapper.find('form').simulate('submit', {preventDefault(){}} )
        expect(setCategories).toHaveBeenCalled()
        expect(setCategories).toHaveBeenCalledTimes(1)
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
        
        // 3. Validate reset of the Input
        expect( input.prop('value') ).toBe('')

    })
    
})
