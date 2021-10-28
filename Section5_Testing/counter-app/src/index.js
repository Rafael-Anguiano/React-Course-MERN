import React from 'react'
import ReactDOM from 'react-dom'
// import FirstApp from './FirstApp';
import './index.css'
import CounterApp from './CounterApp'

const divRoot = document.querySelector('#root');

// ReactDOM.render(<FirstApp greet='Hello Im Goku' />, divRoot)
ReactDOM.render(<CounterApp value={100} />, divRoot)