import React, { useState } from 'react'
import Small from './Small';
import {useCounter} from '../../hooks/useCounter'

import '../effects.css'

const Memorize = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true)
    return (
        <div>
            <h1>Memorize Counter: <Small value={counter}/></h1>
            <hr/>

            <button onClick={()=>increment()} className='btn btn-primary'>+1</button>

            <button 
                className='btn btn-primary'
                onClick={() => {
                    setShow(!show)
                }} 
            >
                Show/Hide {JSON.stringify(show)}
            </button>

        </div>
    )
}

export default Memorize
