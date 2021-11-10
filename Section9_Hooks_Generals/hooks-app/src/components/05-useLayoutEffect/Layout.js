import React, { useState, useRef, useLayoutEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import {useCounter} from '../../hooks/useCounter'
import '../effects.css'

const Layout = () => {

    
    const {counter, increment} = useCounter(1)
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    
    const {quote} = !!data && data[0]
    
    const pTag = useRef();
    
    const [boxSize, setBoxSize] = useState({})

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])
    
    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>
            

            <blockquote className="blockquote text-end">
                <p ref={pTag} className="mb-0"> {quote} </p>
                {/* <footer className="blockquote-footer"> {author} </footer> */}
            </blockquote>

            <pre>{JSON.stringify(boxSize, null, 3)}</pre>
            
            <button onClick={() => increment()} className='btn btn-primary' >Next Quote</button>
            
        </div>
    )
}

export default Layout
