import React from 'react'
import TodoListItem from './TodoListItem'

import '../../styles.css'

const TodoList = ({todos, handleToggle, handleDelete}) => {
    return (
        <ul className='list-group list-group-flush'>
            {  
                todos.map( (todo, i) => (
                    // TodoListItem, todo, index, functions
                    <TodoListItem todo={todo} index={i} handleDelete={handleDelete} handleToggle={handleToggle} />
                ))
            }
        </ul>
    )
}

export default TodoList
