import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInput = (e) => {
        setInputValue(e.target.value)
        // console.log('HandleInputChange called');
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('HandleSubmit', inputValue);
        if(inputValue.trim().length > 2 ){
            setCategories( cats => [inputValue, ...cats])
            setInputValue("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInput}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;