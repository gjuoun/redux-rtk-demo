
import React from 'react'
import { useState, useEffect } from 'react'
import {useCreateTodoMutation} from "../api/todo.api"

export const CreateTodo = () => {
  const [createTodo, {data, isLoading, isError}] = useCreateTodoMutation()

  const [localTodo, setLocalTodo] = useState({
    id: 5,
    userId: 10,
    completed: false,
    title: ""
  })

  console.log(data);

  return <>
    <input value={localTodo.title}
      onChange={(event) => {
        setLocalTodo(prev => {
          return { ...prev, title: event.target.value }
        })
      }}
    /><br />

    <button
    onClick={() => {
      createTodo(localTodo)
    }}
    >
      Create Todo
    </button>
  </>
}