import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { Button, Card, CircularProgress } from '@mui/material'
import { deleteTodo, getTodos } from '../features/todosSlice'


const ListTodos = ({ setTodo }) => {

  const dispatch = useDispatch()
  const todosState = useSelector((state) => state.todosState)
  const { todos } = todosState
  console.log(todos)

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch])

  const handleDelete = (_id) => {
    dispatch(deleteTodo(_id))
  }


  return (
    <div>
      <h2>Current Task: {todos && todos.length}</h2>
      <div>
        {todosState.getTodosStatus === 'pending' ? <CircularProgress /> : null}
        {todos.map(todo =>
          <Card key={todo._id} variant='outlined' sx={{ p: '0.7rem', mb: '2rem' }}>
            <h3>{todo.task}</h3>
            <p>Added:{moment(todo.date).fromNow()}</p>
            <Button variant='outlined' size='small' onClick={() => setTodo(todo)} >Update</Button>
            <Button variant='contained' size='small' sx={{ ml: '0.7rem' }} onClick={() => handleDelete(todo._id)}>Delete</Button>
          </Card>
        )}
      </div>
    </div>
  )
}

export default ListTodos