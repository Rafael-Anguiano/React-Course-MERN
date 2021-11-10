import React from 'react'
import {useForm} from '../../hooks/useForm'
import { useEffect } from 'react'

import './effects.css'

const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    })

    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('Email was Changed');
        
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues, 'Form was Submited');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form With Custom Hook</h1>
            <hr/>
            <div className="form-group">
                <input 
                    type="text"
                    name='name'
                    className="form-control"
                    placeholder="Your Name"
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input 
                    type="text"
                    name='email'
                    className="form-control"
                    placeholder="Your Email"
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            
            <div className="form-group">
                <input 
                    type="password"
                    name='password'
                    className="form-control"
                    placeholder="Password"
                    autoComplete='off'
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit" className='btn btn-primary'>Save</button>
        </form>
    )
}

export default FormWithCustomHook
