import React from 'react';
import CounterApp from '../CounterApp';
import {shallow} from 'enzyme'
import '@testing-library/jest-dom'

describe('Tests of CounterApp component', () => {
    let wrapper = shallow(<CounterApp value={10} />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp value={10} />)
    })

    test('should show CounterApp correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('Value should match with the sent value', () => {
        const wrapper = shallow( <CounterApp value={100} />)
        
        const shownValue = wrapper.find('h2').text().trim()
        expect(shownValue).toBe(`100`);
    })
    
    test('should increment with counter +1', () => {
        wrapper.find('button').at(0).simulate('click');
        
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11')
    })
    test('should decrement with counter -1', () => {
        wrapper.find('button').at(1).simulate('click');
        
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe(`9`)
    })
    test('should reset to default value with button', () => {
        const wrapper = shallow( <CounterApp value={105} />)
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe(`105`)
    })
    
})
