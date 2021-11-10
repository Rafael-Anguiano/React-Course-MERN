const  initialState = [{
    id: 1,
    todo: 'Go to mall',
    done: false
}];



const todoReducer = ( state=initialState, action ) => {

    // switch(action.type){
    //     case 'add': 
    //         break;
    // }

    if(action?.type === 'add'){
        return [...state, action.payload]
    }

    return state
}

let todos = todoReducer();

const newTodo = {
    id: 1,
    todo: 'Go to cinema',
    done: false,
}

const actionAdd = {
    type: 'add',
    payload: newTodo,
}

todos = todoReducer(todos, actionAdd)


console.log(todos);