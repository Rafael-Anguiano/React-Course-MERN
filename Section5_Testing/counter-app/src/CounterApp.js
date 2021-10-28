import React, { useState } from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({value = 10}) => {

    const [counter, setCounter] = useState( value )
    

    //handleAdd
    const handleAdd = (e) => {
        setCounter(counter+1)
    }
    //Substract
    const handleSubstract = (e) => {
        setCounter(counter-1)
    }
    //reset
    const handleReset = (e) => {
        setCounter(value)
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleSubstract }>-1</button>
            <button onClick={ handleReset }>Reset</button>
        </>
    )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

export default CounterApp;