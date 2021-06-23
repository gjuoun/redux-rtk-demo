import React from 'react'
import {Counter} from './components/counter'
import {CreateTodo} from './components/createTodo'
import {useState,useEffect} from 'react'
import { useGetTodosQuery, useGetTodoQuery} from './api/todo.api'
import { useSelector, useDispatch } from 'react-redux'
import {updateTodos} from './redux/todo/todo.reducer'

function App() {
  const dispatch = useDispatch()

  const {data, isLoading, isError} = useGetTodosQuery()

  useEffect(() => {
    if(data){
      dispatch(updateTodos(data)) // data is an array of todos
    }
  }, [data, dispatch])

  
  if(isLoading){
    return <p>is loading</p>
  }else if(isError){
    return <p>is error</p>
  }else{
    return (
      <div className="App" style={{margin: "auto"}}>
        <Counter></Counter>
        <CreateTodo></CreateTodo>
      </div>
    );
  }
  
}

export default App;
