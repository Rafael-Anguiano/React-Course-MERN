import React from 'react'

const ShowIncrement = React.memo(({increment}) => {

    console.log('This is the remix');

    return (
        <button 
            className='btn btn-primary'
            onClick={() => {
                increment(5);
            }}
        >
            Incrementar
        </button>
    )
})

export default ShowIncrement
