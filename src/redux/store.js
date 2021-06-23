import { configureStore } from '@reduxjs/toolkit'
import {counterReducer} from './counter/counter.reducer'
import {todoReducer} from './todo/todo.reducer'
import {todoApi } from '../api/todo.api'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store= configureStore({
  reducer: {
    // redux 
    counter:counterReducer,
    todo: todoReducer,
    // apis
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
})

setupListeners(store.dispatch)