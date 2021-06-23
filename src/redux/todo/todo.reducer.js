import { createSlice } from '@reduxjs/toolkit'

const initialState ={
  todos: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    updateTodos: (state, action) => {
      state.todos = action.payload
    },
    updateTodo: (state, action) => {// action.payload is a single todo
      state.todos = state.todos.map(todo => {
        if(todo.id === action.payload.id){
          return action.payload
        }else{
          return todo
        }
      })
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateTodos, updateTodo } = todoSlice.actions

export const todoReducer = todoSlice.reducer