import React from 'react'
import { useRef } from 'react'
import '../effects.css'

const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <div>
            <h1>useRef</h1>
            <hr/>
            <input
                ref={inputRef}
                className='form-control'
                placeholder='Name'
            />

            <button onClick={handleClick} className='btn btn-outline-primary mt-5'>Focus</button>
        </div>
    )
}

export default FocusScreen
