import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todoList',
    initialState: {
        todos: []
    },
    reducers: {
        addTodos: (state, action) => {
            console.log(action)
            //addTodos에 두 번째 매개변수로 view에서 호출한 inputValue가 넘어옴
            //(payload의 값으로써)
            const newTodo = {
                todo: action.payload,
                id: state.todos.length
            }
            //state에 newTodo를 추가한 후 스토어에 값을 전달
            return { ...state, todos: [...state.todos, newTodo] };
        },

        deleteTodos: (state, action) => {
            const indexToDelete = action.payload;
            const updatedTodos = state.todos.filter((todo, index) => index !== indexToDelete);
            return { ...state, todos: updatedTodos };
        }
    }
});

export const { addTodos, deleteTodos } = todoSlice.actions; // actions=reducers
export default todoSlice.reducer;