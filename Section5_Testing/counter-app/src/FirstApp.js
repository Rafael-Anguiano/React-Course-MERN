import React from 'react';
import PropTypes from 'prop-types'
// import React, { Fragment } from 'react';

// const greet = 'Hello World'

const FirstApp = ({greet, subtitle}) => {
    // console.log(props)
    return (
        <>
            <h1>{ greet }</h1>
            <p>{ subtitle }</p>
        </>
    )
}

FirstApp.propTypes = {
    greet: PropTypes.string.isRequired
}
FirstApp.defaultProps = {
    subtitle: 'Im a default subtitle'
}

export default FirstApp;