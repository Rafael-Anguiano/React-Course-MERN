import React from 'react'
import { useForm } from '../../../hooks/useForm'
import '../../styles.css'

const TodoAdd = ({handleAddTodo}) => {

    const [{desc}, handleInputChange, reset] = useForm({
        desc: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if(desc.trim().length <= 2 ){
            return;
        }

        handleAddTodo({
            id: new Date().getTime(),
            desc: desc,
            done: false,
        })
        reset();
    }

    return (
        <>
            <h4>Add Task ToDo</h4>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='desc'
                    placeholder=' Learn ...'
                    autoComplete='off'
                    className='form-control'
                    onChange={handleInputChange}
                    value={desc}
                />
                <div className = "d-grid gap-2">
                    <button 
                        className='btn btn-success mt-1 '
                        type='submit'
                    >
                        Add Task
                    </button>
                </div>
                
            </form>
        </>
    )
}

export default TodoAdd
