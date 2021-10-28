import React from 'react';
import '@testing-library/jest-dom'
// import { render } from "@testing-library/react"
import {shallow} from 'enzyme'
import PrimeraApp from '../FirstApp'

describe('Tests in PrimeraApp file', () => {
    // test('should show the message <Hello Im Goku>', () => {
    //     const greet = "Hello Im Goku";
    //     const { getByText } = render(<PrimeraApp greet={greet} />);
    
    //     expect(getByText(greet)).toBeInTheDocument();
    // })
    
    test('should show PrimeraApp correctly', () => {
        const greet = "Hello Im Goku";
        const wrapper = shallow(<PrimeraApp greet={greet} />)
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show Subtitle sent by props', () => {
        const greet = "Hello Im Goku";
        const subtitle = "Im a subtitle";
        const wrapper = shallow(
            <PrimeraApp 
                greet={greet} 
                subtitle={subtitle}
            />
        )
        const textParagraph = wrapper.find('p').text()
        expect(textParagraph).toBe(subtitle)

    })
})
