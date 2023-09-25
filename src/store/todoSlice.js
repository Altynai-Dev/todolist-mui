import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState:{//это стейт
        todos: []
    },
    reducers:{//что могу делать с этими тудушками, это действия
        addTodo: (state, action) =>{
            console.log(state, action.payload);
            state.todos.push(action.payload);
        },
        changeTodoStatus: (state, action) =>{
            const todo = state.todos.find(todo => todo.id === action.payload);
            todo.status = !todo.status;
        }
    }
})

export const {addTodo, changeTodoStatus} = todoSlice.actions;//actions - это редьюсеры 
export default todoSlice.reducer;
//reducer - менеджер управляющий стейтом и экшеном