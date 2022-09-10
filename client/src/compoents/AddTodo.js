import React, { useState } from 'react'
import { Button, Alert, CircularProgress } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { todosAdd } from '../features/todosSlice'

const AddTodo = () => {

  const dispatch = useDispatch()
  const todosState = useSelector((state) => state.todosState)
  console.log(todosState)
  const [todo, setTodo] = useState({
    task: '',
    isComplete: false
  })

  const handleSubmit = e => {
    e.preventDefault()


    dispatch(todosAdd(todo))

    setTodo({
      task: '',
      isComplete: false
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='What would you like to do today'
          value={todo.task}
          onChange={e => setTodo({ ...todo, task: e.target.value })}
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{
            margin: "0.9rem 0rem",
            fontFamily: "'Abel', 'sansSerif'",
          }}
        >
          {
            todosState.addTodoStatus === 'pending' ? (
              <CircularProgress size={24} color='secondary' />
            ) : 'Add Task'
          }
        </Button>
        {todosState.addTodoStatus === 'rejected' ? (
          <Alert severity='error'> {todosState.addTodoError}</Alert>
        ) : null}
        {todosState.addTodoStatus === 'success' ? (
          <Alert severity='success'> Task Added </Alert>
        ) : null}
      </form>
    </>
  )
}

export default AddTodo