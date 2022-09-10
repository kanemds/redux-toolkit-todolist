import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { Button, Card, CircularProgress } from '@mui/material'
import { getTodos } from '../features/todosSlice'


const ListTodos = () => {

  const dispatch = useDispatch()
  const todosState = useSelector((state) => state.todosState)
  const { todos } = todosState
  console.log(todos)

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  return (
    <div>
      <h2>Current Task: {todos && todos.length}</h2>
      <div>
        {todosState.getTodosStatus === 'pending' ? <CircularProgress /> : null}
        {todos.map(todo =>
          <Card key={todo._id} variant='outlined' sx={{ p: '0.7rem', mb: '2rem' }}>
            <h3>{todo.task}</h3>
            <p>Added:{moment(todo.date).fromNow()}</p>
            <Button variant='outlined' size='small' >Update</Button>
            <Button variant='contained' size='small' sx={{ ml: '0.7rem' }}>Delete</Button>
          </Card>
        )}
      </div>
    </div>
  )
}

export default ListTodos